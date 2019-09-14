// Import stylesheets
import './style.css';

import * as other from './other';
other.run()


const getQueryStringParameters = url => {
    let query = '';
    console.log(url);
    if (url){
      if(url.split("?").length>0){
      query = url.split("?")[1];
    }
    }else{
       url = window.location.href;
       query = window.location.search.substring(1);
    }
    if(query) {
      return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
    let [ key, value ] = param.split('=');
    params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
    return params;
  }, { });
    }
    return {};
};
getQueryStringParameters(window.location.href);