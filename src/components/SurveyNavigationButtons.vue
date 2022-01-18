<script setup lang="ts">
import { computed, inject } from "vue"

// Provide / Inject API
const pagesState = inject('pagesState');

const humanCurrentPage = inject('humanCurrentPage');
const humanNumberOfPages = inject('totalNumberOfPages');

// Computed Properties
const prevPossible = computed((): boolean => pagesState.currentPage !== 0);
const nextPossible = computed((): boolean => pagesState.currentPage < pagesState.lastPage);
const resultAvailable = computed((): boolean => pagesState.currentPage == pagesState.lastPage);

// Methods
const navigatePage = (amount: number) => pagesState.currentPage += amount;
const showResults = () => pagesState.showSurveyResults = true;
</script> 

<template>
  <div class="survey-pagination" v-if="!pagesState.showSurveyResults">
    <p>Pagina {{ humanCurrentPage }} van {{ humanNumberOfPages }}</p>
    <button class="prev" :disabled="!prevPossible" @click="navigatePage(-1)">
      Vorige
    </button>
    <button
      class="next"
      :disabled="!nextPossible"
      v-if="nextPossible && !resultAvailable"
      @click="navigatePage(1)"
    >
      Volgende
    </button>

    <button
      class="next"
      :disabled="!resultAvailable"
      v-if="resultAvailable"
      @click="showResults"
    >
      Resultaat tonen
    </button>
  </div>
</template>

<style lang="scss">
.survey-pagination {
  margin: 1rem 0;
  button {
    background-color: #ec6826;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      background-color: #888;
    }
  }
}
</style>