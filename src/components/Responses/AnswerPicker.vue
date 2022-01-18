<script setup lang="ts">
import { PropType } from "vue";
import type { Answer } from "../../models/questions";
import AnswerPickerButton from "./AnswerPickerButton.vue";
import Buttons from "./Buttons.vue";
import Dropdown from "./Dropdown.vue";

defineProps({
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  answers: {
    type: Array as PropType<Answer[]>,
    required: true,
  },
});
</script>

<template>
  <form class="answers">
    <Buttons :answers="answers" :slug="slug" :category="category" />

    <Dropdown
      class="dropdown"
      :answers="answers"
      :slug="slug"
      :category="category"
    />
  </form>
</template>

<style lang="scss">
.answers {
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 640px) {
    .buttons {
      display: none;
    }
    .dropdown {
      display: block;
    }
  }
}
</style>