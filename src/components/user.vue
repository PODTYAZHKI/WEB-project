<template>
  <div class="is-flex is-align-items-center">
    <dropdown>
      <template #trigger>
        <span
          class="is-clickable is-flex is-flex-direction-row is-align-items-center"
        >
          <figure class="image is-32x32 mr-2" v-if="avatar">
            <img class="is-rounded user-avatar" :src="avatar" />
          </figure>
          <el-avatar class="mr-2" :size="32" v-else>
            {{ username[0] }}
          </el-avatar>
          {{ username }}
          <i class="mdi mdi-chevron-down ml-2" v-if="asDropdown" />
        </span>
      </template>
      <template #content v-if="asDropdown">
        <a @click="openProfile" class="dropdown-item"> Профиль </a>
        <!-- <a href="/api/auth/logout" class="dropdown-item danger">
          <i class="mdi mdi-logout" />
          Выйти
        </a> -->
        <a @click="logout()" class="dropdown-item danger">
          <i class="mdi mdi-logout" />
          Выйти
        </a>
      </template>
    </dropdown>
    <profile v-model="profile"></profile>
  </div>
</template>

<script>
import profile from "@/components/profile";
import dropdown from "@/components/dropdown";
import { removeAuthToken } from "@/utils/auth";
export default {
  components: {
    profile,
    dropdown,
  },
  props: ["as-dropdown"],
  data() {
    return {
      profile: false,
    };
  },
  computed: {
    username() {
      return this.$store.state.data.name || null;
    },
    avatar() {
      return this.$store.state.data.avatar || null;
    },
    email() {
      return this.$store.state.data.email || null;
    },
  },
  methods: {
    openProfile() {
      this.profile = true;
    },
    logout() {
      
        removeAuthToken();
        if (!this.$router.name === "index")
        this.$router.push({ name: "index" });
        this.$store.commit("setLoggedIn", false);
      
    },
  },
};
</script>

<style scoped lang="scss">
.danger {
  color: #ff5b5b;

  &:hover {
    color: #ff5b5b;
    background: #fde6e6;
  }
}

.user-avatar {
  max-height: max-content;
}
</style>
