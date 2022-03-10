export default $axios => ({
  list(params) {
    return $axios.$get(`/users/search`, { params });
  },
});
