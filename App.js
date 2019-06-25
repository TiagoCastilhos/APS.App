import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tab, Container, Header, Tabs } from 'native-base';
import NewRule from './src/Components/NewRule';

export default function App() {
  return (
    <View style={styles.container}>
      <Container>
          <Header />
          <Tabs>
            <Tab heading="Nova Regra">
              <NewRule />
            </Tab>              
            <Tab heading="Regras" />
            <Tab heading="Relação" />
          </Tabs>
        </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
