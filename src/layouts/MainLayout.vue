<template>
  <v-layout row wrap>
    <v-app-bar app class="my-toolbar white ml-8 mr-8 subheading" elevation="0" >
      <div class="toolbar-barnd">
        <a href="/" class="d-flex align-center"> 
          <v-img
          alt="MIEM Logo"
          class="shrink"
          contain
          src="@/assets/images/new-logo.svg"
          transition="scale-transition"
          height="1.75rem"
          width="auto"
        />
        <!-- <span>Онлайн МИЭМ НИУ ВШЭ</span> -->
        </a>
      </div>

      <v-spacer></v-spacer>

      <span v-if="$store.state.loggedIn" class="d-flex routes flex-nowrap justify-center">

        <router-link
          class="pa-5"
          v-for="route in routes"
          :key="route.to"
          :to="route.to"
        v-show="
          (!route.onlyLoggedIn || $store.state.loggedIn)"
        >{{ route.label }}
        
          
        </router-link>
      </span>
      <v-spacer></v-spacer>
        
        
      <v-chip
        v-if="!this.$store.state.loggedIn"
        class="my-button flex-grow-0 pa-5"
        color="primary"
        
        @click="login()"
      
      >
        Войти
      </v-chip>
      <user v-else></user>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import user  from '@/components/user.vue'
export default {
  components: { user },
  name: "MainLayout",
  component: {
    user
  },
  data() {
    return {
      routes: [
        {
          to: "/",
          label: "Пары на сегодня",
          onlyLoggedIn: false,
          onlyForTeacher: false,
        },
        {
          to: "/my",
          label: "Мои пары",
          onlyLoggedIn: true,
          onlyForTeacher: false,
        },
        {
          to: "/customs",
          label: "Мои встречи",
          onlyLoggedIn: true,
          onlyForTeacher: false,
        },
        {
          to: "/preferences",
          label: "Выбор платформ",
          onlyLoggedIn: true,
          onlyForTeacher: true,
        }
      ]
    }
  },
  methods: {
    login() {
      this.$store.commit('login')
    }
  }
  
};
</script>

<style scoped lang="scss">
  
  .my-toolbar ::v-deep .v-toolbar__content{
    /* background: red !important; */
    /* flex:1; */
    padding: 0 ;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }

  .routes {
    /* background: red; */
    position: absolute;
    width: 100%; 
    /* display: flex; */
    /* top: 0; */
    /* left: 25%; */
    /* margin-left: -50%; */
  }
  

  a {
    text-decoration: none;
    color: #3E4C57;
  }
  a:hover {
    color: #2673f0;
  }
  .my-button {
    border-radius: 12px;
    font-size: 14px;
    // background-color: red !important;
    color: #fff !important;
  }


</style>>
