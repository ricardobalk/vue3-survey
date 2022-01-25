export type Question = {
  slug: string,     // Slug used to identify the question. Important for grouping the HTML fields (!).
  category: string, // Category of the question.
  label: string,    // Label given to the question.
}
// {
//   "slug": "first-day-on-the-job",
//   "category": "Experience"
//   "label": "How has your first day been?",
// }

export type Answer = {
  score: number, // Score given to the answer.
  label?: string, // Label given to the answer.
}
// {
//   "score": 10,
//   "label": "Great!"
// }

export type SurveyQuestion = Question & {
  answers: Answer[],
}
// {
//   "slug": "first-day-on-the-job",
//   "category": "Experience"
//   "label": "How has your first day been?",
//   "answers": [
//     { "score": 10, label: "Great" },
//     ...
//     { "score": 6, label: "So-so" },
//   ]
// }

export type SurveyQuestions = SurveyQuestion[];
// Above, but in an Array

export type Responses = {[key: string]: number};
// {
//   "question-1": 0,
//   "question-2": 1,
//   "question-3": 1,
// }