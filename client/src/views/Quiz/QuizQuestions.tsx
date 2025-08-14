import React from 'react';
import { Box } from '@mui/material';
import MultipleChoiceQuestion from '../../components/quiz/MultipleChoiceQuestion';
import TextInputQuestion from '../../components/quiz/TextInputQuestion';
import TextareaQuestion from '../../components/quiz/TextareaQuestion';
import { QuizQuestionsProps, Question } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const QuizQuestions: React.FC<QuizQuestionsProps> = ({
  questions,
  answers,
  onAnswerChange,
}) => {
  const renderQuestion = (question: Question) => {
    const value = answers[question.id] || '';

    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoiceQuestion
            key={question.id}
            question={question.question}
            options={question.options || []}
            value={value}
            onChange={(value) => onAnswerChange(question.id, value)}
            required={question.required}
          />
        );
      case 'text':
        return (
          <TextInputQuestion
            key={question.id}
            question={question.question}
            value={value}
            onChange={(value) => onAnswerChange(question.id, value)}
            placeholder={question.placeholder}
            required={question.required}
          />
        );
      case 'textarea':
        return (
          <TextareaQuestion
            key={question.id}
            question={question.question}
            value={value}
            onChange={(value) => onAnswerChange(question.id, value)}
            placeholder={question.placeholder}
            required={question.required}
            rows={question.rows}
            maxLength={question.maxLength}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('centered'),
      mb: LAYOUT_CONSTANTS.SPACING.LG,
    }}>
      <Box sx={{
        maxWidth: layoutUtils.getContentWidth('standard'),
        mx: 'auto',
      }}>
        {questions.map(renderQuestion)}
      </Box>
    </Box>
  );
};

export default QuizQuestions;
