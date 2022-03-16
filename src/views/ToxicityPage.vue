<template>
  <v-btn @click="toxicity()">Пример toxicity</v-btn>
</template>

<script>
export default {
  methods: {
    toxicity() {
      const toxicity = require('@tensorflow-models/toxicity');
      const threshold = 0.9;
      toxicity.load(threshold).then(model => {
        const sentences = ['you suck'];
        model.classify(sentences).then(predictions => { console.log(predictions);});
      });
    }
  }
};
</script>

<style></style>
