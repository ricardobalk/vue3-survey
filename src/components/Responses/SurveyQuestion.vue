<script setup lang="ts">
import AnswerPicker from "./AnswerPicker.vue";
import { defineProps, PropType } from "vue";
import type { Answer } from "../models/questions";
defineProps({
  slug: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  answers: Array as PropType<Answer[]>,
});
</script>

<template>
  <div class="question">
    <h2>{{ question }}</h2>
    <AnswerPicker :slug="slug" :category="category" :answers="answers" />
  </div>
</template>