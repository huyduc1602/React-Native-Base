import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../../app/utils/i18n';
import * as StringNames from '../../app/assets/locales/StringNames';
import * as ScreenTypes from '../../app/navigation/ScreenTypes';
import * as loginAction from '../../app/actions/loginAction';
import Loading from '../../app/components/Loading';
import { connect } from 'react-redux';
const TAG = 'LoginScreen';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

  }

  loginClick() {
    console.log(TAG + ' loginClick ');
    // this.props.navigation.navigate(ScreenTypes.Home);
    this.props.onLogin(this.state);
  }

  renderLoading() {
    const { statusLogin } = this.props;
    return (
      statusLogin.loading === true && <Loading />
    );
  }

  render() {
    return (
      <>
        {this.renderLoading()}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.5}
            onPress={() => this.loginClick()}
          >
            <Text style={styles.textStyle}> {i18n.t(StringNames.bLogin)} </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#0057B8',
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    // marginTop: 5,
    minHeight: 48,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

function mapStateToProps(state) {
  return {
    statusLogin: state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (params) => dispatch(loginAction.requestLogin(params)),
  };
}

// https://react-redux.js.org/api/connect
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);