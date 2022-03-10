<template>
    <div class="information">
        <span class="title">
          <i class="mdi mdi-alert-circle mr-20" />
          Войдите в аккаунт
        </span>
        <span class="description">
          Чтобы увидеть свои пары, необходимо
          <!-- <router-link to="/login">авторизоваться</router-link> -->
          <a @click="login()">авторизоваться</a>
        </span>
      </div>
</template>

<script>
    export default {
        methods: {
    login() {
      window.location.href = process.env.VUE_APP_BASE_API + '/keycloak/login';
    }
  },
    }
</script>

<style scoped lang="scss">
    .information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;

  // Large screens
  @media only screen and (min-width: 768px) {
    margin-left: 26px;
    margin-top: 10px;
  }

  .title {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #3f4d58;
    margin-bottom: 12px;

    i {
      color: #ff5b5b;
      font-size: 20px;
      margin-right: 14px;
    }
  }

  .description {
    font-size: 1rem;
    line-height: 1.25rem;
    color: #3f4d58;
    margin-bottom: 10px;
    margin-left: 34px;

    a {
      color: #2673f0;
      font-size: inherit;
      transition: 0.2s;

      &:hover {
        color: #6fa6ff;
      }
    }
  }

  .button {
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 12px;
    color: #2673f0;
    padding: 12px 80px;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;

    i {
      margin-left: 10px;
    }
  }
}

</style>