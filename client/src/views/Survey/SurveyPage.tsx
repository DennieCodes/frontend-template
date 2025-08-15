import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SurveyHeader from './SurveyHeader';
import SurveyStepper from './SurveyStepper';
import SurveyProgress from './SurveyProgress';
import SurveyQuestions from './SurveyQuestions';
import SurveyNavigation from './SurveyNavigation';
import { SurveyQuestion } from './types';
import { sampleSurveyQuestions, surveySteps } from './mockData';

const SurveyPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < surveySteps.length - 1) {
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
    // Handle survey submission
    // You can add API call here to save survey responses
    alert('Survey submitted successfully!');
  };

  const getQuestionsForStep = (step: number) => {
    const questionsPerStep = Math.ceil(sampleSurveyQuestions.length / surveySteps.length);
    const startIndex = step * questionsPerStep;
    const endIndex = Math.min(startIndex + questionsPerStep, sampleSurveyQuestions.length);
    return sampleSurveyQuestions.slice(startIndex, endIndex);
  };

  const currentQuestions = getQuestionsForStep(currentStep);

  // Check if all required questions in current step are answered
  const canProceed = useMemo(() => {
    const requiredQuestions = currentQuestions.filter(q => q.required);
    return requiredQuestions.every(q => {
      const answer = answers[q.id];
      if (q.type === 'checkbox') {
        return Array.isArray(answer) && answer.length > 0;
      } else {
        return typeof answer === 'string' && answer.trim() !== '';
      }
    });
  }, [currentQuestions, answers]);

  return (
    <>
      <SurveyHeader
        title={t('pages.survey.title', 'User Feedback Survey')}
        subtitle={t('pages.survey.subtitle', 'Please take a moment to share your thoughts and help us improve our platform.')}
      />

      <SurveyStepper
        steps={surveySteps}
        currentStep={currentStep}
      />

      <SurveyProgress
        currentStep={currentStep}
        totalSteps={surveySteps.length}
      />

      <SurveyQuestions
        questions={currentQuestions}
        answers={answers}
        onAnswerChange={handleAnswerChange}
      />

      <SurveyNavigation
        currentStep={currentStep}
        totalSteps={surveySteps.length}
        onNext={handleNext}
        onBack={handleBack}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        canProceed={canProceed}
      />
    </>
  );
};

export default SurveyPage;
