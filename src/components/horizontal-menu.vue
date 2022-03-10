<template>
  <div class="navbar-menu">
    <div class="navbar-start">
      <router-link
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        v-show="!item.onlyLoggedIn || $store.state.loggedIn"
        class="navbar-item"
        exact-active-class="is-active"
        >{{ item.label }}</router-link
      >
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <!-- <router-link v-if="!$store.state.loggedIn" to="/login">
          <el-button type="primary" size="medium">Войти</el-button>
        </router-link> -->
        <el-button
          type="primary"
          size="medium"
          v-if="!$store.state.loggedIn"
          @click="login()"
          >Войти</el-button
        >
        <user :as-dropdown="true" v-else />
      </div>
    </div>
  </div>
</template>

<script>

// import {hasAuthToken} from "@/utils/auth";
import user from "@/components/user"
// import store from '@/store/index';
export default {
  props: ["items"],
  created() {
    console.log('env', process.env.VUE_APP_BASE_API)

    // // console.log('123', window.location.search);
    // console.log('horizontal')
    // if (!store.state.loggedIn && window.location.search.length > 0 && !this.$cookies.isKey('238_auth')) {
    //   let onlyToken = window.location.search.split('=')[1]
    //   console.log('token', onlyToken)
    //   this.$cookies.set('238_auth', onlyToken)
    //   window.location.search = ''
    // }
  },
  components: {
    user
  },
  methods: {
    // login() {
    //   this.$store.commit('LOGIN')
    // },
    login() {
      // window.location.href = `${process.env.VUE_APP_BASE_API}/login/keycloak`;
      window.location.href = process.env.VUE_APP_BASE_API + '/keycloak/login';



      // токен eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWVlN2U3MDY5NzVhMDdkN2RkNTNlMDAiLCJlbWFpbCI6InNtbXV6eWNodWtAbWllbS5oc2UucnUiLCJpYXQiOjE2NDMwMzQ1NjksImV4cCI6MTY0MzAzNDg2OX0.2Iq9r4ylpYhLOS3EJlpTd8HC_qVaMRZn5zM0r5PS8fg
    }
  }
};
</script>

<style scoped lang="scss">
.navbar-start {
  // center routes
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
}

.navbar-item {
  color: #8c949b;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  background: transparent !important;
  transition: 0.1s;

  &:hover:not(.is-active) {
    color: #66717a;
  }
}
.is-active {
  color: #3f4d58 !important;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.25rem;
}
</style>
