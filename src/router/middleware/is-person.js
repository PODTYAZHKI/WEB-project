export default function ({ store, route, redirect }) {
  if (store.state.user?.type !== "person" && !store.state.user.is_admin) { // Пытается перейти на выбор платформ, но не препод => направляем на главную
    return redirect('/');
  }
}
