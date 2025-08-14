# Quiz Components

This directory contains reusable quiz question components for creating interactive assessments.

## Components

### MultipleChoiceQuestion
A radio button-based multiple choice question component.

**Props:**
- `question: string` - The question text
- `options: string[]` - Array of answer options
- `value: string` - Currently selected value
- `onChange: (value: string) => void` - Callback when selection changes
- `required?: boolean` - Whether the question is required (default: false)

**Usage:**
```tsx
<MultipleChoiceQuestion
  question="What is your favorite color?"
  options={["Red", "Blue", "Green", "Yellow"]}
  value={selectedValue}
  onChange={setSelectedValue}
  required={true}
/>
```

### TextInputQuestion
A single-line text input question component.

**Props:**
- `question: string` - The question text
- `value: string` - Current input value
- `onChange: (value: string) => void` - Callback when input changes
- `placeholder?: string` - Placeholder text for the input
- `required?: boolean` - Whether the question is required (default: false)
- `multiline?: boolean` - Whether to allow multiple lines (default: false)
- `rows?: number` - Number of rows for multiline input (default: 1)

**Usage:**
```tsx
<TextInputQuestion
  question="What is your name?"
  value={name}
  onChange={setName}
  placeholder="Enter your full name"
  required={true}
/>
```

### TextareaQuestion
A multi-line textarea question component for longer responses.

**Props:**
- `question: string` - The question text
- `value: string` - Current input value
- `onChange: (value: string) => void` - Callback when input changes
- `placeholder?: string` - Placeholder text for the input
- `required?: boolean` - Whether the question is required (default: false)
- `rows?: number` - Number of rows (default: 4)
- `maxLength?: number` - Maximum character limit

**Usage:**
```tsx
<TextareaQuestion
  question="Describe your experience with React."
  value={experience}
  onChange={setExperience}
  placeholder="Please describe your experience..."
  required={true}
  rows={6}
  maxLength={500}
/>
```

## QuizPage
The main quiz page component that demonstrates how to use these question components together with pagination and navigation.

**Features:**
- Step-by-step navigation with progress indicator
- Multiple question types on each step
- Cancel, back, next, and submit buttons
- Responsive design
- Internationalization support

## Styling
All components use Material-UI components and follow the existing design system. They are styled with consistent spacing, typography, and color schemes.

## Accessibility
- All form controls have proper labels and ARIA attributes
- Required fields are clearly marked with asterisks
- Keyboard navigation is supported
- Screen reader friendly
