import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Stack,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MultipleChoiceQuestion from '../components/quiz/MultipleChoiceQuestion';
import TextInputQuestion from '../components/quiz/TextInputQuestion';
import TextareaQuestion from '../components/quiz/TextareaQuestion';

interface Question {
  id: string;
  type: 'multiple-choice' | 'text' | 'textarea';
  question: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

const QuizPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Sample quiz questions
  const questions: Question[] = [
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

  const steps = ['Personal Info', 'Experience', 'Preferences', 'Details'];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    // Here you would typically submit the answers to your backend
    console.log('Quiz answers:', answers);
    alert('Quiz submitted successfully!');
    navigate('/');
  };

  const getQuestionsForStep = (step: number) => {
    const questionsPerStep = Math.ceil(questions.length / steps.length);
    const startIndex = step * questionsPerStep;
    const endIndex = Math.min(startIndex + questionsPerStep, questions.length);
    return questions.slice(startIndex, endIndex);
  };

  const currentQuestions = getQuestionsForStep(currentStep);

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
            onChange={(value) => handleAnswerChange(question.id, value)}
            required={question.required}
          />
        );
      case 'text':
        return (
          <TextInputQuestion
            key={question.id}
            question={question.question}
            value={value}
            onChange={(value) => handleAnswerChange(question.id, value)}
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
            onChange={(value) => handleAnswerChange(question.id, value)}
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {t('pages.quiz.title', 'Developer Assessment Quiz')}
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        {t('pages.quiz.subtitle', 'Please answer the following questions to help us understand your background and preferences.')}
      </Typography>

      {/* Progress Stepper */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      {/* Questions */}
      <Box sx={{ mb: 4 }}>
        {currentQuestions.map(renderQuestion)}
      </Box>

      {/* Progress Info */}
      <Alert severity="info" sx={{ mb: 3 }}>
        {t('pages.quiz.progress', 'Step {{current}} of {{total}}', {
          current: currentStep + 1,
          total: steps.length
        })}
      </Alert>

      {/* Navigation Buttons */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={handleCancel}
          color="error"
        >
          {t('common.cancel')}
        </Button>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            {t('common.back', 'Back')}
          </Button>

          {currentStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              color="primary"
            >
              {t('pages.quiz.submit', 'Submit Quiz')}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              color="primary"
            >
              {t('common.next', 'Next')}
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default QuizPage;
