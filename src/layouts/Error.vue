<template>
<div class="error-wrapper">
  <error v-if="error.reason == 'no-lesson'" image="no-lesson" title="Пара или встреча не найдена" description="В данной комнате нет конференции"></error>
  <error v-else-if="error.statusCode === 404" image="404" title="Страница не найдена" description="Похоже, что вы потерялись..."></error>
  <error v-else image="unknown-error" title="Неизвестная ошибка" description="Мы уже её исправляем"></error>
  </div>
</template>

<script>
export default {
  props: ["error"],
  head() {
    return {
      title: 'Ошибка'
    }
  },
};
</script>

<style scoped>
.error-wrapper {
  height: 100%;
  width: 100%;
}
</style>
