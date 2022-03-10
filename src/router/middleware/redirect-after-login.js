export const REDIRECT_KEY = '238-redirect-route';

export default function ({ redirect, $cookies }) {
  const route = $cookies.get(REDIRECT_KEY);
  if (route) {
    $cookies.remove(REDIRECT_KEY);
    redirect(route);
  }
}
