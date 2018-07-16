import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="login"
          title="Please Login"
          component={LoginForm}
        // initial
        />
      </Stack>
    </Router>
  );
}

export default RouterComponent;