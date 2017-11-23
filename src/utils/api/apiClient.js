import axios from 'axios';

import config from '../../constants/config';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'];

const formatUrl = (path) => `http://${config.host}:${config.port}${path}`;

class apiClient {
  constructor() {
    /**
     * SET DYNAMICALLY METHODS FOR API CALLS
     *
     */
    METHODS.forEach((method) =>
      this[method] = (path, { headers, data } = {}, auth = {}, credentials = false) => {
        const adjustedInfo = {
          method,
          url: formatUrl(path),
        };


        if (headers) adjustedInfo.headers = headers;
        if (data) adjustedInfo.data = data;
        if (credentials) adjustedInfo.withCredentials = credentials;
        if (Object.keys(auth)) adjustedInfo.auth = auth;

        return axios(adjustedInfo);
      });
  }
}

export default new apiClient();