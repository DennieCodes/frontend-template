import React from 'react';

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

interface TextInputQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

interface TextareaQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

declare const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps>;
declare const TextInputQuestion: React.FC<TextInputQuestionProps>;
declare const TextareaQuestion: React.FC<TextareaQuestionProps>;

export { MultipleChoiceQuestion, TextInputQuestion, TextareaQuestion };
export default MultipleChoiceQuestion;
