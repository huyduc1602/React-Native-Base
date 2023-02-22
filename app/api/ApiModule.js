// class ApiModule.js => get, post, ... basic class
// import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
// import axiosRetry from 'axios-retry';
// import { getConfigs, setConfigsENV } from 'app/config';
// import { BaseResponse, BaseErrorResponse } from 'app/types/ResponseTypes';
// import { AsyncStorage } from 'react-native';
// import * as Constants from 'app/utils/constants';
// import UserAgent from 'react-native-user-agent';

import axios, {
  isCancel,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';
import {BaseResponse, BaseErrorResponse} from '../../app/api/ResponseTypes';
import VersionNumber from 'react-native-version-number';
import {Platform} from 'react-native';

const TAG = 'ApiModule';
const TIME_OUT = 30000;
const NETWORK_ERROR = 'Network Error';

export default class ApiModule {
  constructor(info = {}) {
    // this.url = getConfigs().BASE_URL;
    this.token = 'API_TOKEN...';
    this.languageCode = 'en';
    this.instanceWithToken = axios.create({
      baseURL: this.url,
      timeout: TIME_OUT, // not working for Android https://github.com/axios/axios/issues/2073
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': this.languageCode,
        Authorization: this.token,
        'User-Agent': this.userAgent,
        version: '1.8',
        app: 'store',
        os: Platform.OS,
      },
    });
  }

  get(url: string, config: AxiosRequestConfig = null) {
    console.log(TAG + ' GET ' + url + ' ' + JSON.stringify(config));
    return this.instanceWithToken
      .get(url, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  post(url: string, data: any, config: AxiosRequestConfig) {
    console.log(TAG + ' POST ' + url + JSON.stringify(data));
    return this.instanceWithToken
      .post(url, data, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  update(url: string, data: any, config: AxiosRequestConfig) {
    console.log(TAG + ' UPDATE ' + url + JSON.stringify(data));
    return this.instanceWithToken
      .put(url, data, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  delete(url: string, config: AxiosRequestConfig = null) {
    console.log(TAG + ' DELETE ' + url + JSON.stringify(config));
    return this.instanceWithToken
      .delete(url, config)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  /**
   * @returns BaseResponse
   */
  handleResponse(response: AxiosResponse<BaseResponse>): BaseResponse {
    if (response.status === 200) {
      return response.data;
    } else {
      return {
        status: 'error',
      };
    }
  }

  handleError(error: AxiosError<BaseErrorResponse>): BaseErrorResponse {
    if (error.response != null) {
      return error.response.data;
    } else {
      // Error
      switch (error.message) {
        case NETWORK_ERROR:
          return {
            status: NETWORK_ERROR,
            code: null,
            message: error.message,
          };

        default:
          return {
            status: error.name,
            code: null,
            message: error.message,
          };
      }
    }
  }
}
