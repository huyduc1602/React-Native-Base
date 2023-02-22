import React, { Component, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import i18n from '../../app/utils/i18n';
import * as StringNames from '../../app/assets/locales/StringNames';
import * as ScreenTypes from '../../app/navigation/ScreenTypes';
import * as loginAction from '../../app/actions/loginAction';
import Loading from '../../app/components/Loading';
import { connect } from 'react-redux';
import { CustomInput } from '../components/Input/CustomInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TAG = 'LoginScreen';

function LoginScreen(props) {
  /* A constructor function. It is called when an instance of the class is created. */
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //   };
  // }
  const [username, setUsername] = useState('ids00001');
  const [password, setPassword] = useState('ids00001');

  const { colors } = useTheme();

  const loginClick = () => {
    console.log(TAG + ' loginClick ');
    // this.props.navigation.navigate(ScreenTypes.Home);

    props.onLogin({ username, password });
  };

  const renderLoading = () => {
    const { statusLogin } = props;
    return statusLogin.loading === true && <Loading />;
  };

  return (
    <>
      {/* {renderLoading()} */}
      <View style={styles.container}>
        <TextInput
          // styles={{borderColor:'black',borderWidth:1}}
          value={username}
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <TextInput
          // styles={{ borderColor: 'black' }}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <View style={{ marginBottom: 15 }}>
          {/* <CustomInput
            icon={
              <FontAwesome name={'user'} size={20} color={colors.textLight} />
            }
            value={''}
            placeholder="Enter Username"
            onChangeText={username => console.log(username)}
          /> */}
        </View>
        <View style={{ marginBottom: 15 }}>
          {/* <CustomInput
            type={'password'}
            icon={
              <FontAwesome name={'lock'} size={20} color={colors.textLight} />
            }
            value={''}
            placeholder="Password"
            onChangeText={password => console.log(password)}
          /> */}
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.5}
          onPress={() => loginClick()}>
          <Text style={styles.textStyle}> {i18n.t(StringNames.bLogin)} </Text>
        </TouchableOpacity>
      </View>
    </>
  );
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
    onLogin: params => dispatch(loginAction.requestLogin(params)),
  };
}

// https://react-redux.js.org/api/connect
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
