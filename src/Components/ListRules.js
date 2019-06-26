import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import RuleCard from './Rules/RuleCard';

export default class ListRules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rules: []
        }
    }

    deleteRule = (id) => {
        fetch('https://accessblockerapi.azurewebsites.net/Rules/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                this.getRules()
                alert('Regra deletada com sucesso');
            })
            .catch(() => alert('Erro ao deletar regra'))
    }

    getRules = () => {
        fetch('https://accessblockerapi.azurewebsites.net/Rules?relationshipId=' + '1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(data => this.setState({ rules: data }))
            .catch((e) => alert("Ocorreu um erro ao obter as regras. Erro: " + e));
    }

    componentDidMount() {
        this.getRules();
    }

    render() {
        const rules = this.state.rules;

        return (
            <Container>
                <Content>
                    {rules !== undefined && rules !== null && rules.length > 0 ?
                        rules.map(r =>
                            <RuleCard key={r.ruleId} siteUri={r.siteUri} creationDate={r.creationDate} deleteRule={() => this.deleteRule(r.ruleId)} />)
                        : null}
                    <Button block style={styles.button} onPress={() => this.getRules()}>
                        <Text style={styles.buttonText}>Atualizar lista</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        alignSelf: 'center',
        margin: 30
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
})