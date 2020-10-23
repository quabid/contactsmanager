import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './screens/HomeScreen';
import Header from './components/Header';
import SigninScreen from './screens/SigninScreen';
import ContactsScreen from './screens/ContactsScreen';
import ContactScreen from './screens/ContactScreen';
import EditContactScreen from './screens/EditContactScreen';

const App = () => {
  return (
    <Router>
      <Header branding='Personal & Business Connections' />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/auth/signin' component={SigninScreen} exact />
          <Route path='/api/contacts' component={ContactsScreen} exact />
          <Route path='/api/contacts/:id' component={ContactScreen} exact />
          <Route
            path='/api/contacts/edit/:id'
            component={EditContactScreen}
            exact
          />
          <Route path='/api/contacts/delete/:id' exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
