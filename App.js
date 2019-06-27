import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tab, Container, Header, Tabs } from 'native-base';
import NewRule from './src/Components/NewRule';
import ListRules from './src/Components/ListRules';
import Relationship from './src/Components/Relationship'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Header hasTabs />
          <Tabs>
            <Tab heading="Nova Regra">
              <NewRule />
            </Tab>
            <Tab heading="Regras">
              <ListRules />
            </Tab>
            <Tab heading="Relação">
              <Relationship />
            </Tab>
          </Tabs>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9dadb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});