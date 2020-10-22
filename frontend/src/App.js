import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './screens/HomeScreen';
import Header from './components/Header';
import SigninScreen from './screens/SigninScreen';
import UsersScreen from './screens/UsersScreen';
import UserScreen from './screens/UserScreen';

const App = () => {
  return (
    <Router>
      <Header branding='Personal & Business Connections' />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/auth/signin' component={SigninScreen} exact />
          <Route path='/api/users' component={UsersScreen} exact />
          <Route path='/api/users/edit/:id' component={UserScreen} exact />
          <Route path='/api/users/delete/:id' exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
