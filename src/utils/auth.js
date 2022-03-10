import Vue from 'vue'
const auth_cookie_name = 'sessionid';
const csrf_token_name = 'csrftoken'

export function hasAuthToken() {
    return Vue.$cookies.isKey(auth_cookie_name)
  }
  
  export function getAuthToken() {
    return Vue.$cookies.get(auth_cookie_name);
  }

  export function getCSRFToken() {
    return Vue.$cookies.get(csrf_token_name);
  }
  
  export function removeAuthToken() {
    return Vue.$cookies.remove(auth_cookie_name);
  }
