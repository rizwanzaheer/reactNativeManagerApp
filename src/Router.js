import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Stack
          key="login"
          title="Please Login"
          component={LoginForm}
          initial={true}
        // tabs={true}
        />
        <Scene
          key="employeeList"
          title="Employees"
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          component={EmployeeList}
          initial
        />
        <Scene
          key="employeeCreate"
          title="Create Employees"
          component={EmployeeCreate}
        />
      </Stack>
    </Router>
  );
}

export default RouterComponent;