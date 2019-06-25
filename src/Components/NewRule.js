import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Container, Label, Content, Item, Input, Button } from 'native-base';

const NewRule = () => {
    return (
        <Container>
            <Content>
                <Text style={styles.label}>Digite a URL:</Text>
                <Item regular>
                    <Input style={styles.input} placeholder="Exemplo: https://youtube.com" />
                </Item>
                <Button block style={styles.button}>
                    <Text style={styles.buttonText}>Criar regra</Text>
                </Button>
            </Content>
        </ Container>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Roboto',
        fontSize: 38,
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

export default NewRule;