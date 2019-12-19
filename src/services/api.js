
import axios from 'axios';
import { routeAPIApplication, routeAPIServiceWeather } from './env.js';


export const apiApplication = axios.create({
    baseURL: routeAPIApplication
});

export const apiService = axios.create({
    baseURL: routeAPIServiceWeather
});
