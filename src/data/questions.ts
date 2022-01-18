import type { SurveyQuestions } from '../models/questions';

export const questions: Array<SurveyQuestions> = [
  [
    {
      "slug": "1-beleid",
      "category": "Het beleid",
      "label": "In ons organisatiebeleid is vastgelegd dat elke student de ondersteuning krijgt die nodig is om succesvol naar werk te kunnen uitstromen.",
      "answers": [
        {"score": 3, "label": "Volledig van toepassing"},
        {"score": 2, "label": "Grotendeels van toepassing"},
        {"score": 1, "label": "Gedeeltelijk van toepassing"},
        {"score": 0, "label": "Niet van toepassing"},
      ]
    },
    {
      "slug": "2-org-uitvoering",
      "category": "Organisatie/uitvoering",
      "label": "Taken, rollen en bevoegdheden rondom de begeleiding van studenten met extra ondersteuningsvraag zijn helder.",
      "answers": [
        {"score": 3, "label": "Volledig van toepassing"},
        {"score": 2, "label": "Grotendeels van toepassing"},
        {"score": 1, "label": "Gedeeltelijk van toepassing"},
        {"score": 0, "label": "Niet van toepassing"},
      ]
    },
  ],

  [
    {
      "slug": "3-stages",
      "category": "Stages",
      "label": "We zorgen dat de begeleiding van stagiairs wordt aangepast op zijn/haar specifieke ondersteuningsbehoefte.",
      "answers": [
        {"score": 3, "label": "Volledig van toepassing"},
        {"score": 2, "label": "Grotendeels van toepassing"},
        {"score": 1, "label": "Gedeeltelijk van toepassing"},
        {"score": 0, "label": "Niet van toepassing"},
      ]
    },
    {
      "slug": "4-interne-samenwerking",
      "category": "Interne samenwerking",
      "label": "Zorgconsultenten, studieloopbaanbegeleiders, vakdocenten en stagebegeleiders stemmen hun ondersteuning op elkaar af.",
      "answers": [
        {"score": 3, "label": "Volledig van toepassing"},
        {"score": 2, "label": "Grotendeels van toepassing"},
        {"score": 1, "label": "Gedeeltelijk van toepassing"},
        {"score": 0, "label": "Niet van toepassing"},
      ]
    },
  ],

  [
    {
      "slug": "5-kennis-vaardigheden-medewerkers",
      "category": "Kennis en vaardigheden medewerkers",
      "label": "We weten welke vaardigheden medewerkers nodig hebben bij de begeleiding van studenten met een extra ondersteuningsbehoefte.",
      "answers": [
        {"score": 3, "label": "Volledig van toepassing"},
        {"score": 2, "label": "Grotendeels van toepassing"},
        {"score": 1, "label": "Gedeeltelijk van toepassing"},
        {"score": 0, "label": "Niet van toepassing"},
      ]
    },
    {
      "slug": "6-regionale-samenwerking",
      "category": "Regionale samenwerking",
      "label": "Onze organisatie werkt voor alle studenten uit deze doelgroep samen met een sociale dienst, UWV of werkgeverservicepunt.",
      "answers": [
        {"score": 3, "label": "Volledig van toepassing"},
        {"score": 2, "label": "Grotendeels van toepassing"},
        {"score": 1, "label": "Gedeeltelijk van toepassing"},
        {"score": 0, "label": "Niet van toepassing"},
      ]
    },
  ],

  [
    {
      "slug": "7-student-extra-ondersteuningsbehoefte",
      "category": "Student met extra ondersteuningsbehoefte",
      "label": "We weten hoe succesvol de studenten met een extra ondersteuningsbehoefte op onze school zijn in de overgang van opleiding naar werk.",
      "answers": [
        {"score": 3, "label": "Volledig van toepassing"},
        {"score": 2, "label": "Grotendeels van toepassing"},
        {"score": 1, "label": "Gedeeltelijk van toepassing"},
        {"score": 0, "label": "Niet van toepassing"},
      ]
    },
    {
      "slug": "8-invulling-beleid",
      "category": "Sturingsinformatie",
      "label": "In onze organisatie praten studenten mee over de invulling van het beleid en de ondersteuningstrajecten.",
      "answers": [
        {"score": 3, "label": "Volledig van toepassing"},
        {"score": 2, "label": "Grotendeels van toepassing"},
        {"score": 1, "label": "Gedeeltelijk van toepassing"},
        {"score": 0, "label": "Niet van toepassing"},
      ]
    },
  ]
]