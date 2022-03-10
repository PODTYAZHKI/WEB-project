// import { REDIRECT_KEY } from './redirect-after-login';

const guestRoutes = ["/", "/login"];

export default function auth({ store, to, next/*$cookies*/}) {
  if (store.state.loggedIn && to.path === '/login') { // Пытается перейти на логин, но уже залогинен => направляем на главную
    // return redirect({name: 'index'});
    // return this.$router.push({path: '/'});
    return next({
      path: '/'
    })
  }

  if (!store.state.loggedIn && !guestRoutes.includes(to.path)) {
    // $cookies.set(REDIRECT_KEY, from.path);
    // return redirect({name: 'login'});
    console.log(to)
    return next({
      path: '/login'
    })
  }
}
