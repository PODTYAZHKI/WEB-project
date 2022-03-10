export default $axios => ({
  listPlatforms(params) {
    return $axios.$get(`/constructor/platforms`, { params });
  },

  listPreferences(params) {
    return $axios.$get(`/constructor/available-preferences`, { params });
  },

  getSelectedPlatform(disciplineId, lessonTypeId) {
    return $axios.$get(`/constructor/preferences/discipline/${disciplineId}/kow/${lessonTypeId}`);
  },

  putSelectedPlatform(disciplineId, lessonTypeId, payload) {
    return $axios.$put(`/constructor/preferences/discipline/${disciplineId}/kow/${lessonTypeId}`, payload);
  },
});
