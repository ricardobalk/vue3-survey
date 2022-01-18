<script lang="ts">
// Global imports
import { computed, defineComponent, provide, reactive } from 'vue';

// Type definitions
import type { Responses } from './models/questions';

// Components
import Progressbar from "./components/Progressbar.vue";
import Survey from "./components/Survey.vue";
import SurveyNavigationButtons from "./components/SurveyNavigationButtons.vue";
import SurveyResults from "./components/Results/SurveyResults.vue";

// Data
import { questions } from "./data/questions";

// Component definition
const App = defineComponent({
  components: {
    Progressbar,
    Survey,
    SurveyNavigationButtons,
    SurveyResults,
  },

  setup() {
    // Data properties
    const pagesState = reactive({
      currentPage: 0, // the page
      lastPage: 3,
      showSurveyResults: false, // whether or not to show the Survey Results (and hide the questions)
    });
    const questionResponses: Responses = reactive({}); // place to save responses to answers.

    // Computed properties
    const overallProgress = computed((): Number => ((pagesState.currentPage) / (pagesState.lastPage + 1)) * 100);
    const totalNumberOfPages = computed((): Number => questions.length); // Length of the array, keep in mind that it's always index + 1.
    const humanCurrentPage = computed((): Number => pagesState.currentPage + 1);

    // Provide / Inject API: Non-reactive
    provide('overallProgress', overallProgress);
    provide('humanCurrentPage', humanCurrentPage);
    provide('totalNumberOfPages', totalNumberOfPages);
    provide('questions', questions);

    // Provide / Inject API: Reactive
    provide('pagesState', pagesState);
    provide('questionResponses', questionResponses);

    // Initialise questionResponses
    questions.flat().forEach((item) => (questionResponses[item.category] = 0));

    // Return data
    return { pagesState, overallProgress, questions, humanCurrentPage };
  },
});

// Exports
export default App;
</script>

<template>
  <div class="survey-container">
    <h1>QuickScan</h1>

    <div class="survey">
      <Progressbar
        :progress="overallProgress"
        v-if="!pagesState.showSurveyResults"
      />
      <Survey :questions="questions" v-if="!pagesState.showSurveyResults" />
      <SurveyNavigationButtons />
    </div>

    <SurveyResults v-if="pagesState.showSurveyResults" />
  </div>
</template>

<style>
#app {
  font-family: Manrope, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1rem;
}

a {
  color: #42b983;
}

.survey-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progressbar {
  margin: 2rem 0;
}

h2 {
  font-size: 1.375rem;
}
</style>
