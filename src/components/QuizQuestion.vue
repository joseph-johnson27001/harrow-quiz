<template>
  <div>
    <h2>{{ question }}</h2>
    <ul>
      <li
        v-for="(answer, index) in answers"
        :key="index"
        @click="selectAnswer(index)"
      >
        {{ answer.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["question", "answers"],
  emits: ["answer"],
  methods: {
    selectAnswer(index) {
      this.$emit("answer", index);
    },
  },
};
</script>
