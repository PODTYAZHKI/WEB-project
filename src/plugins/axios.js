export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (!error.response || error.response.status === 403) {
      redirect('/');
    }
    else if (error.response.status === 401 && error.request.path !== '/api/auth/user') {
      redirect('/login');
    }
  });
}
