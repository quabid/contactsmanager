import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import ContactsScreen from './screens/ContactsScreen';
import ContactScreen from './screens/ContactScreen';
import NewContactScreen from './screens/NewContactScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import About from './components/About';

const App = () => {
  return (
    <>
      <Router>
        <Header branding='Contact Manager' />
        <Container style={{ marginTop: '5%' }} fluid>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/contacts' component={ContactsScreen} />
          <Route exact path='/contact/:id' component={ContactScreen} />
          <Route path='/newcontact' component={NewContactScreen} />
          <Route path='/register' component={SignupScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/login' component={SigninScreen} />
          <Route path='/about' component={About} />
        </Container>
      </Router>
      <video id='background-video' playsInline loop autoPlay={true} muted>
        <source src='/contacts_group.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default App;
