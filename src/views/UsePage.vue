<template>
  <v-btn @click="use()">Пример Universal Sentence Encoder</v-btn>
</template>

<script>
export default {
  methods: {
    use() {
      const use = require('@tensorflow-models/universal-sentence-encoder');
      use.load().then(model => {
        const sentences = [
             'Hello.',
            'How are you?'
        ];
        model.embed(sentences).then(embeddings => {
            embeddings.print(true);
        });
    });
    }
  }
};
</script>

<style></style>
