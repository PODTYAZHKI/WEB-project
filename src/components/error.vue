<template>
  <div class="error1">
    <div>
      <img class="image" :src="require(`@/static/${this.image}.svg`)" />
      <div class="title">{{ title }}</div>
      <p class="description">
        {{ description }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "description"],
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
        }
      ]
    }
    
  },

};
</script>

<style scoped lang="scss">
.error1 {
  width: 100%;
  height: 100%;
  background: transparent;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;

  .image {
    margin: auto;
  }

  .title {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: #3f4d58;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .description {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: #3f4d58;

    a {
      &.external-link {
        font-weight: 600;
      }

      &.internal-link {
        color: rgb(134, 134, 134);

        &:hover {
          color: rgb(156, 156, 156);
        }
      }
    }
  }

  // Small screens
  @media only screen and (orientation: landscape) and (max-height: 500px),
    screen and (max-width: 768px) {
    .image {
      max-width: 50%;
      max-height: 50%;
    }

    .title {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    .description {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }
}
</style>
