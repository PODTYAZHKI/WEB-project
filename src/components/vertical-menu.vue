<template>
  <el-drawer
    :visible.sync="drawer"
    direction="rtl"
    size="80%"
    :modal-append-to-body="false"
  >
    <template slot="title">
      <!-- <router-link v-if="!$store.state.loggedIn" to="/login">
        <el-button type="primary" size="medium"> Войти </el-button>
      </router-link> -->
      <el-button type="primary" size="medium" v-if="!$store.state.loggedIn" @click="login()">Войти</el-button>
      <user v-else />
    </template>
    <div class="drawer-menu">
      <div class="drawer-start">
        <router-link
          v-for="item in items"
          :key="item.to"
          class="drawer-item"
          :to="item.to"
          v-show="
            !item.onlyLoggedIn || $store.state.loggedIn
          "
          v-on:click.native="handleClick"
          >{{ item.label }}</router-link
        >
      </div>
      <div class="drawer-end">
        <a
          @click="logout()"
          class="button is-danger is-inverted"
          v-if="$store.state.loggedIn"
        >
          Выйти <i class="mdi mdi-logout-variant ml-2" />
        </a>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import user from "@/components/user"
import { removeAuthToken } from "@/utils/auth";
export default {
  components: {
    user
  },
  props: ["items", "show"],
  model: {
    prop: "show",
    event: "show-change"
  },
  methods: {
    login() {
      // window.location.href = `${process.env.VUE_APP_BASE_API}/login/keycloak`;
      window.location.href = process.env.VUE_APP_BASE_API + '/keycloak/login';



      // токен eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWVlN2U3MDY5NzVhMDdkN2RkNTNlMDAiLCJlbWFpbCI6InNtbXV6eWNodWtAbWllbS5oc2UucnUiLCJpYXQiOjE2NDMwMzQ1NjksImV4cCI6MTY0MzAzNDg2OX0.2Iq9r4ylpYhLOS3EJlpTd8HC_qVaMRZn5zM0r5PS8fg
    },
    logout() {
      
        removeAuthToken();
        if (!this.$router.name === "index")
        this.$router.push({ name: "index" });
        this.$store.commit("setLoggedIn", false);
      
    },
    handleClick() {
      this.drawer = false;
    },
  },
  computed: {
    drawer: {
      get: function() {
        return this.show;
      },
      set: function(value) {
        this.$emit("show-change", value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.drawer-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-left: 12px;
  padding-bottom: 28px;

  .drawer-start,
  .drawer-end {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .drawer-item {
    color: #8c949b;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;
    background: transparent !important;
    padding: 8px;

    &:hover:not(.is-active) {
      color: #66717a;
    }

    &.is-active {
      color: #3f4d58 !important;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }
}
</style>
