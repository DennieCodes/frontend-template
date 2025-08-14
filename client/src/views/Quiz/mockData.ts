import { Question } from './types';

export const sampleQuestions: Question[] = [
  {
    id: '1',
    type: 'multiple-choice',
    question: 'What is your preferred programming language?',
    required: true,
    options: ['JavaScript', 'Python', 'Java', 'C++', 'Other'],
  },
  {
    id: '2',
    type: 'text',
    question: 'What is your favorite framework or library?',
    required: false,
    placeholder: 'Enter your favorite framework...',
  },
  {
    id: '3',
    type: 'multiple-choice',
    question: 'How many years of experience do you have in programming?',
    required: true,
    options: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', 'More than 10 years'],
  },
  {
    id: '4',
    type: 'textarea',
    question: 'Describe a challenging project you worked on and how you solved it.',
    required: true,
    placeholder: 'Please describe your experience...',
    rows: 6,
    maxLength: 500,
  },
  {
    id: '5',
    type: 'text',
    question: 'What is your current role or job title?',
    required: false,
    placeholder: 'e.g., Frontend Developer, Full Stack Engineer...',
  },
  {
    id: '6',
    type: 'multiple-choice',
    question: 'Which development methodology do you prefer?',
    required: true,
    options: ['Agile', 'Scrum', 'Waterfall', 'Kanban', 'Other'],
  },
];

export const quizSteps = ['Personal Info', 'Experience', 'Preferences', 'Details'];
