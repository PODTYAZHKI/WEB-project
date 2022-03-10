<template>
  <div
    class="dropdown is-right"
    :class="{ 'is-active': dropdown }"
    v-click-outside="closeDropdown"
  >
    <div class="dropdown-trigger" @click="openDropdown">
      <slot name="trigger"></slot>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content" @click="closeDropdown">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false
    };
  },
  methods: {
    closeDropdown() {
      this.dropdown = false;
    },
    openDropdown() {
      if (this.$slots.content) {
        this.dropdown = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.dropdown-menu {
  top: -4px;

  .dropdown-content {
    border-radius: 12px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #3f4d58;
  }

  animation: fadeIn 0.1s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(calc(-1 * 10px));
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
.is-active {
  color: #3f4d58 !important;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.25rem;
}
</style>
