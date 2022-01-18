<script setup lang="ts">
import { inject, PropType } from "vue";
import { Answer } from "../../models/questions";

defineProps({
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  answer: {
    type: Object as PropType<Answer>
  }
});

const questionResponses = inject("questionResponses");
</script>

<template>
  <div class="answer">
    <input
      type="radio"
      :name="slug"
      :id="`question_${slug}_answer-${answer.score}`"
      :value="answer.score"
      v-model="questionResponses[category]"
    />
    <label :for="`question_${slug}_answer-${answer.score}`">
      <span>
        {{ answer.score }}
        {{ answer.label }}
      </span>
    </label>
  </div>
</template>

<style lang="scss">
.answer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 0.85rem;
  font-weight: 700;
  &:not(:first-child) {
    border-left: 1px solid #333;
  }
  &:hover {
    background: #eee;
    cursor: pointer;
  }

  input {
    height: 0;
    padding: 0;
    margin: 0;
    appearance: none;
    visibility: hidden;

    &:checked + label {
      background: #ec6826;
      color: #fff;
      padding: 0.5rem 0;
    }

    & + label {
      padding: 0.5rem 0;
      cursor: pointer;
    }
  }
}
</style>