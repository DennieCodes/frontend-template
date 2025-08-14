import React from 'react';

interface TextInputQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

declare const TextInputQuestion: React.FC<TextInputQuestionProps>;
export default TextInputQuestion;
