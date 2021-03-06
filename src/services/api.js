
import axios from 'axios';
import { routeAPIApplication, routeAPIServiceWeather } from './env.js';


export const apiApplication = axios.create({
    baseURL: routeAPIApplication
});


export const apiService = axios.create({
    baseURL: routeAPIServiceWeather
});

apiService.interceptors.request.use(config => {
    let prefix = config.url.indexOf('?') === -1 ? '?' : '&';

    config.url = `${config.url + prefix}APPID=4eb004c6e89a4912abb8b5466a5f9da9`;
    return config;
});
