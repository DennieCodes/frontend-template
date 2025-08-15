import React from 'react';
import { Box } from '@mui/material';
import {
  CheckboxQuestion,
  RadioQuestion,
  TextQuestion,
  TextareaQuestion,
} from '../../components/survey';
import { SurveyQuestionsProps, SurveyQuestion } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const SurveyQuestions: React.FC<SurveyQuestionsProps> = ({
  questions,
  answers,
  onAnswerChange,
}) => {
  const renderQuestion = (question: SurveyQuestion) => {
    const value = answers[question.id];

    switch (question.type) {
      case 'checkbox':
        return (
          <CheckboxQuestion
            key={question.id}
            question={question.question}
            options={question.options || []}
            value={Array.isArray(value) ? value : []}
            onChange={(value) => onAnswerChange(question.id, value)}
            required={question.required}
            allowMultiple={question.allowMultiple}
          />
        );
      case 'radio':
        return (
          <RadioQuestion
            key={question.id}
            question={question.question}
            options={question.options || []}
            value={typeof value === 'string' ? value : ''}
            onChange={(value) => onAnswerChange(question.id, value)}
            required={question.required}
          />
        );
      case 'text':
        return (
          <TextQuestion
            key={question.id}
            question={question.question}
            value={typeof value === 'string' ? value : ''}
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
            value={typeof value === 'string' ? value : ''}
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

export default SurveyQuestions;
