<template>
  <!-- TODO В мобильной ориентации лагает оверлей -->
  <el-dialog :visible.sync="dialog" :modal-append-to-body="false">
    <template #title>
      <span class="profile-title"> Профиль пользователя </span>
    </template>
    <div class="profile-content">
      <figure class="image is-64x64" v-if="avatar">
        <img class="is-rounded profile-avatar" :src="avatar" />
      </figure>
      <el-avatar class="mr-2" :size="64" v-else>
        {{ username[0] }}
      </el-avatar>
      <div class="profile-info">
        <span class="name" v-text="username" /> <span v-text="email" />
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ["show"],
  model: {
    prop: "show",
    event: "show-change"
  },
  computed: {
    dialog: {
      get: function() {
        return this.show;
      },
      set: function(value) {
        this.$emit("show-change", value);
      }
    },
    username() {
      return this.$store.state.data.name || null;
      // return "Иванов Иван Иванович"
    },
    avatar() {
      return this.$store.state.data.avatar|| null;
    },
    email() {
      return this.$store.state.data.email|| null;
      // return "example@miem.hse.ru"
    }
  }
};
</script>

<style scoped lang="scss">
::v-deep .el-dialog {
  border-radius: 12px;
  width: fit-content;

  // Small screens
  @media only screen and (max-width: 768px) {
    margin: 10px;
  }

  .profile {
    &-title {
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: #3f4d58;
    }

    &-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    &-info {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      line-height: 1.25rem;
      color: #3f4d58;
      padding-left: 24px;

      .name {
        font-weight: 600;
        padding-bottom: 16px;
      }
    }

    &-avatar {
      max-height: max-content;
    }
  }
}
</style>
