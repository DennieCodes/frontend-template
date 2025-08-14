import React from 'react';
interface MultipleChoiceQuestionProps {
    question: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}
declare const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps>;
export default MultipleChoiceQuestion;
