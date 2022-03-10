import axios from 'axios'

export default $axios => ({
  getUser() {
    var info
    axios
      .get(`${/api/auth/keycloak}/api/auth/keycloak`)
      .then(response => (this.info = response));
    return this.info
    // return $axios.$get(`/auth/user`);
  },
})