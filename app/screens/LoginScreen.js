import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import i18n from '../utils/i18n';
import * as StringNames from '../assets/locales/StringNames';
import * as loginAction from '../actions/loginAction';
import Loading from '../components/Loading';
import {connect} from 'react-redux';
import InputLogin from '../components/Input/InputLogin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SIZES, IMAGES} from '../constants/theme';
import Button from '../components/Button/Button';

const TAG = 'LoginScreen';

function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {colors} = useTheme();

  const loginClick = () => {
    console.log(TAG + ' loginClick ');
    props.onLogin({username, password});
  };

  const renderLoading = () => {
    const {statusLogin} = props;
    return statusLogin.loading === true && <Loading />;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={IMAGES.bgLogin} style={styles.backgroundImage}>
        {renderLoading()}
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={IMAGES.logo} />
          </View>
          <Text style={styles.title}>{i18n.t(StringNames.tApp)}</Text>
          <View style={styles.form}>
            <View style={styles.input}>
              <InputLogin
                icon={
                  <FontAwesome
                    name={'user'}
                    size={20}
                    color={colors.textLight}
                  />
                }
                value={username}
                placeholder={i18n.t(StringNames.pUserName)}
                onChangeText={text => setUsername(text)}
              />
            </View>
            <View style={styles.input}>
              <InputLogin
                type={'password'}
                icon={
                  <FontAwesome
                    name={'lock'}
                    size={20}
                    color={colors.textLight}
                  />
                }
                value={password}
                placeholder={i18n.t(StringNames.pPassword)}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <View style={styles.loginButton}>
              <Button
                onPress={() => loginClick()}
                btnRounded
                title={i18n.t(StringNames.bLogin)}
                style={styles.button}
              />
            </View>
          </View>
          <View style={styles.registerButton}>
            <Button
              btnRounded
              title={i18n.t(StringNames.bRegister)}
              style={styles.button}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    height: undefined,
    width: undefined,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding,
    paddingLeft: SIZES.padding5,
    paddingRight: SIZES.padding5,
    marginTop: SIZES.margin30,
    height: '100%',
  },
  logo: {
    width: SIZES.logoWidth,
    height: SIZES.logoHeight,
    marginTop: SIZES.margin30,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: SIZES.margin10,
    marginBottom: SIZES.margin,
  },
  form: {
    marginTop: 20,
    marginBottom: SIZES.padding,
  },
  input: {
    marginBottom: SIZES.margin20,
  },
  textStyle: {
    color: '#fff',
    fontSize: SIZES.fontLg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    width: '100%',
    paddingTop: SIZES.paddingButton,
    marginTop: SIZES.padding10,
  },
  registerButton: {
    width: '100%',
    height: '20%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: SIZES.paddingButton,
    paddingTop: SIZES.paddingButton,
  },
  button: {
    width: '100%',
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
