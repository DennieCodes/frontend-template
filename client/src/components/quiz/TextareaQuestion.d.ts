import React from 'react';

interface TextareaQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

declare const TextareaQuestion: React.FC<TextareaQuestionProps>;
export default TextareaQuestion;
