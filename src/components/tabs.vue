<template>
  <div class="tabs-wrapper">
    <div
      class="tab-box"
      v-for="item in items"
      :key="item.id"
      :class="{ selected: isSelected(item.id) }"
      @click="selectItem(item)"
      :id="`tab${item.id}`"
    >
      <span class="lesson">{{ item.label }}</span>
      <span class="time">
        {{ item.time }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "value", "tab-position"],
  model: {
    prop: "value",
    event: "change"
  },
  computed: {
    model: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("change", value);
      }
    }
  },
  methods: {
    selectItem(item) {
      document
        .getElementById(`tab${item.id}`)
        .scrollIntoView({ behavior: "smooth" });
      this.model = item.id;
    },
    isSelected(id) {
      return this.model === id;
    }
  },
};
</script>

<style scoped lang="scss">
.tabs-wrapper {
  display: flex;
  background: #fff;

  &.tab-position-left {
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 1px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: hsl(0, 0%, 75%);
    }

    .tab-box {
      &:not(:first-child) {
        margin-top: 12px;
      }
    }
  }

  &.tab-position-top {
    flex-direction: row;
    overflow-x: auto;

    .tab-box {
      height: fit-content;

      &:not(.selected) {
        border: 1px solid #dbdbdb;
      }

      &.selected {
        border: 1px solid #2673f0;
      }

      &:not(:first-child) {
        margin-left: 12px;
      }

      .lesson {
        white-space: nowrap;
        overflow: hidden;
      }

      .time {
        display: none;
      }
    }
  }

  .tab-box {
    background: transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px 20px;
    cursor: pointer;
    transition: 0.2s;

    .lesson {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1rem;
      color: #3f4d58;
    }

    .time {
      font-size: 0.9rem;
      line-height: 1rem;
      color: #8c949b;
      opacity: 0.8;
      margin-top: 8px;
    }

    &:hover {
      background: #f1f1f1;
    }

    &.selected {
      background: #2673f0;

      .lesson {
        color: #fff;
      }

      .time {
        color: #fff;
      }
    }
  }
}
</style>
