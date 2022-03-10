export default $axios => ({
  list() {
    return $axios.$get('/lessons/customs');
  },

  listMy() {
    return $axios.$get('/lessons/customs/my');
  },

  create(payload) {
    return $axios.$post('/lessons/customs', payload);
  },

  update(id, payload) {
    return $axios.$put(`/lessons/customs/${id}`, payload);
  },

  delete(id) {
    return $axios.$delete(`/lessons/customs/${id}`);
  },
});
