import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView } from 'react-native';
import { Container, List, ListItem, Content, Item, Input, Button } from 'native-base';

export default class NewRule extends Component {
    state = {
        mostPopularRules: [
            { key: 1, url: "https://google.com" },
            { key: 2, url: "https://youtube.com" },
            { key: 3, url: "https://www.netflix.com/" }
        ],
        urlToCreateRule: ''
    }

    changeUrlHandler = (text) => {
        this.setState({
            urlToCreateRule: text
        });
    }

    createRule = () => {
        if (this.state.urlToCreateRule !== '') {
            const body = {
                'relationshipId': 1,
                'siteUri': this.state.urlToCreateRule
            }
            fetch('https://accessblockerapi.azurewebsites.net/Rules',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }).catch(() => 'Erro ao criar regra');
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text style={styles.label}>Digite a URL:</Text>
                    <Item regular>
                        <Input style={styles.input}
                            placeholder="Exemplo: https://youtube.com"
                            value={this.state.urlToCreateRule}
                            onChangeText={(text) => this.changeUrlHandler(text)} />
                    </Item>
                    <Button block style={styles.button} onPress={() => this.createRule()}>
                        <Text style={styles.buttonText}>Criar regra</Text>
                    </Button>
                    <ScrollView>
                        <List>
                            <Text style={styles.popularRules}>URLs mais populares</Text>
                            {this.state.mostPopularRules.map(r =>
                                <ListItem key={r.key} onPress onPress={() => this.changeUrlHandler(r.url)}>
                                    <Text>{r.url}</Text>
                                </ListItem>)}
                        </List>
                    </ScrollView>
                </Content>
            </ Container>
        )
    };
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Roboto',
        fontSize: 38,
        textAlign: 'center',
        margin: 20
    },
    popularRules: {
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'center',
        margin: 20
    },
    button: {
        width: '50%',
        alignSelf: 'center',
        margin: 30
    },
    input: {
        width: '60%'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
})