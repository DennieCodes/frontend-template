import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QuizHeader from './QuizHeader';
import QuizStepper from './QuizStepper';
import QuizProgress from './QuizProgress';
import QuizQuestions from './QuizQuestions';
import QuizNavigation from './QuizNavigation';
import { Question } from './types';
import { sampleQuestions, quizSteps } from './mockData';

const QuizPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
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

  const handleSubmit = (answers: Record<string, any>) => {
    // Handle quiz submission
    alert('Quiz submitted successfully!');
  };

  const getQuestionsForStep = (step: number) => {
    const questionsPerStep = Math.ceil(sampleQuestions.length / quizSteps.length);
    const startIndex = step * questionsPerStep;
    const endIndex = Math.min(startIndex + questionsPerStep, sampleQuestions.length);
    return sampleQuestions.slice(startIndex, endIndex);
  };

  const currentQuestions = getQuestionsForStep(currentStep);

  // Check if all required questions in current step are answered
  const canProceed = useMemo(() => {
    const requiredQuestions = currentQuestions.filter(q => q.required);
    return requiredQuestions.every(q => answers[q.id] && answers[q.id].trim() !== '');
  }, [currentQuestions, answers]);

  return (
    <>
      <QuizHeader
        title={t('pages.quiz.title', 'Developer Assessment Quiz')}
        subtitle={t('pages.quiz.subtitle', 'Please answer the following questions to help us understand your background and preferences.')}
      />

      <QuizStepper
        steps={quizSteps}
        currentStep={currentStep}
      />

      <QuizQuestions
        questions={currentQuestions}
        answers={answers}
        onAnswerChange={handleAnswerChange}
      />

      <QuizProgress
        currentStep={currentStep}
        totalSteps={quizSteps.length}
      />

      <QuizNavigation
        currentStep={currentStep}
        totalSteps={quizSteps.length}
        onNext={handleNext}
        onBack={handleBack}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        canProceed={canProceed}
      />
    </>
  );
};

export default QuizPage;
