# Survey View

A modular survey page with multi-step navigation, various question types, and progress tracking.

## Structure

```
Survey/
├── components/           # Individual question components
│   ├── CheckboxQuestion.tsx
│   ├── RadioQuestion.tsx
│   ├── TextQuestion.tsx
│   └── TextareaQuestion.tsx
├── SurveyHeader.tsx      # Page header with breadcrumbs
├── SurveyStepper.tsx     # Step indicator
├── SurveyProgress.tsx    # Progress bar
├── SurveyQuestions.tsx   # Question renderer
├── SurveyNavigation.tsx  # Navigation buttons
├── SurveyPage.tsx        # Main page component
├── types.ts             # TypeScript interfaces
├── mockData.ts          # Sample questions and steps
└── README.md            # This file
```

## Features

- **Multi-step navigation**: Survey is divided into logical steps
- **Progress tracking**: Visual progress bar and step counter
- **Question types**: Support for checkbox, radio, text, and textarea questions
- **Validation**: Required field validation before proceeding
- **Responsive design**: Works on desktop and mobile devices
- **Accessibility**: Proper form labels and ARIA attributes

## Question Types

### Checkbox Questions
- Multiple selection support
- Visual feedback with chips showing selected options
- Configurable for single or multiple selection

### Radio Questions
- Single selection from multiple options
- Clear visual indication of selected option

### Text Questions
- Single line text input
- Placeholder text support
- Required field validation

### Textarea Questions
- Multi-line text input
- Character count display
- Configurable rows and max length

## Usage

The survey page is self-contained and can be easily integrated into your routing system. It includes:

- Navigation between steps
- Form validation
- Progress tracking
- Cancel and submit functionality

## Customization

To customize the survey:

1. Modify `mockData.ts` to change questions and steps
2. Update question types in `types.ts` if needed
3. Customize styling in individual components
4. Add new question types by extending the component structure

## State Management

The survey uses local state to manage:
- Current step
- User answers
- Validation state

Answers are collected in a single object with question IDs as keys and string or string array values.
