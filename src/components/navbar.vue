<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item has-text-weight-medium" href="/">
        <img src="@/assets/images/logo.png" class="navbar-hse"/>
        <!-- <img src="@/assets/images/logo.svg" /> -->
        <span class="ml-1 navbar-title">АнтиТокс</span>
      </a>
      <a
        v-if="!hideNavigation"
        role="button"
        class="navbar-burger"
        @click="drawer = true"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <horizontalMenu :items="routes" v-if="!hideNavigation"></horizontalMenu>
    <verticalMenu :items="routes" v-model="drawer"></verticalMenu>
  </nav>
</template>

<script>
import horizontalMenu from "@/components/horizontal-menu"
import verticalMenu from "@/components/vertical-menu"
export default {
  props: {
    hideNavigation: Boolean
  },
  components: {
    horizontalMenu,
    verticalMenu
  },
  data() {
    return {
      drawer: false,
      routes: [
        {
          to: "/features",
          label: "Интеллектуальные функции",
        },
        {
          to: "/examples",
          label: "Примеры",
          
        },
        {
          to: "/ivents",
          label: "Ивенты",
          
        },
        {
          to: "/reviews",
          label: "Отзывы",
          
        },
        // {
        //   to: "/preferences",
        //   label: "Выбор платформ",
        //   onlyLoggedIn: true,
        //   onlyForTeacher: true,
        // }
      ]
    };
  },
};
</script>

<style scoped lang="scss">

.navbar {
  border-bottom: 1px solid #dbdbdb;
}
.navbar-title {
  color: #4a4a4a !important;
}
.navbar-hse {
  margin-right: 20px;
}
// Small screens
@media only screen and (max-width: 768px) {
  .navbar {
    margin-right: 0;
    margin-left: 0;

    .navbar-brand {
      font-size: 1rem;
    }
  }
}

// Large screens
@media only screen and (min-width: 769px) {
  .navbar {
    margin-right: 40px;
    margin-left: 40px;

    .navbar-brand {
      font-size: 1.25rem;
    }
  }
}

.navbar-brand {
  z-index: 2;
}

</style>
