const routes = ["/", "/login", "/my", "/preferences", "/customs"];

export default async function ({ route, redirect, error, $api }) {
  const path = route.path;
  if (!routes.includes(path) && path.split('/').length == 2) {
    const room = path.replace('/', '');
    try {
      const url = await $api.lessons.getUrl(room);
      redirect(url);
    }
    catch (err) {
      error({ reason: 'no-lesson' });
    }
  }
}
