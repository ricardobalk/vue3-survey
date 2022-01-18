<script setup lang="ts">
import { PropType, inject } from "vue";
import { Answer } from "../../models/questions";
import AnswerPickerButton from "./AnswerPickerButton.vue";

defineProps({
  answers: {
    type: Array as PropType<Answer[]>,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const questionResponses = inject('questionResponses');
</script>

<template>
  <div class="buttons">
    <AnswerPickerButton
      v-for="(answer, index) in answers"
      :answer="answer"
      :key="index"
      :category="category"
      :slug="slug"
    />
  </div>
</template>

<style lang="scss">
.buttons {
  display: flex;
}
</style>