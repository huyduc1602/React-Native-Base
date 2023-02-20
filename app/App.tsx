import React, { Component } from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { I18nextProvider } from 'react-i18next';
import i18n from '../app/utils/i18n';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import ContainerNavigation from './navigation/ContainerNavigation';

const { persistor, store } = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaProvider>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <ContainerNavigation />
          </Provider>
        </I18nextProvider>
      </SafeAreaProvider>
    );
  }
}