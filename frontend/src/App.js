import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import ContactsScreen from './screens/ContactsScreen';
import ContactScreen from './screens/ContactScreen';

const App = () => {
  return (
    <Router>
      <Header branding='Deez Nuts' />
      <Container style={{ marginTop: '5%' }} fluid>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/api/contacts' component={ContactsScreen} />
        <Route exact path='/api/contact/:id' component={ContactScreen} />
      </Container>
    </Router>
  );
};

export default App;
