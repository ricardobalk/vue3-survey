<script setup lang="ts">
import { PropType, inject } from "vue";
import type { SurveyQuestions } from "../models/questions";
import SurveyQuestion from "./Responses/SurveyQuestion.vue";

defineProps({
  questions: Array as PropType<SurveyQuestions[]>,
})

const pagesState = inject('pagesState');

// Computed Properties
const isActive = (index: number): boolean => pagesState.currentPage === index;
</script>

<template>
  <div
    :class="`page page-${index} ${isActive(index) ? 'active' : ''}`"
    v-for="(page, index) in questions"
    :key="index"
  >
    <SurveyQuestion
      v-for="(question, index) in page"
      :key="index"
      :slug="question.slug"
      :category="question.category"
      :question="question.label"
      :answers="question.answers"
    />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: none;
  padding: 2.5rem 0;
  &.active {
    display: block;
  }
}
</style>