import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import ContactsScreen from './screens/ContactsScreen';
import ContactScreen from './screens/ContactScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import About from './components/About';

const App = () => {
  return (
    <>
      <Router>
        <Header branding="Contact Manager" />
        <Container style={{ marginTop: '5%' }} fluid>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/api/contacts" component={ContactsScreen} />
          <Route exact path="/api/contact/:id" component={ContactScreen} />
          <Route exact path="/users/signin" component={SigninScreen} />
          <Route exact path="/users/signup" component={SignupScreen} />
          <Route exact path="/about" component={About} />
        </Container>
        <video id="background-video" playsInline loop autoPlay={true} muted>
          <source src="/contacts_group.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Router>
    </>
  );
};

export default App;
