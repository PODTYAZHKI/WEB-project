export default $axios => ({
  list(params) {
    return $axios.$get(`/lessons`, { params });
  },

  listMy() {
    return $axios.$get(`/lessons/my`);
  },

  getUrl(auditorium) {
    return $axios.$get(`/lessons/uri/${auditorium}`)
  }
});
