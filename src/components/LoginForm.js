import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', err: '', loading: false }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });


    // this.setState({ err: '', loading: true });
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(this.onLoginSuccess.bind(this))
    //   .catch(() => {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(this.onLoginSuccess.bind(this))
    //       .catch(this.onLoginFailed.bind(this));
    //   });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
    </Button>);
  }
  onLoginFailed() {
    this.setState({ err: 'Authentication failed!', loading: false });
  }
  onLoginSuccess() {
    this.setState({ email: '', password: '', err: '', loading: false });
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'White' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label="Email"
            placeHolder="user@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            label="Password"
            placeHolder="Password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const maspStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  }
}

export default connect(maspStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);