export interface Question {
  id: string;
  type: 'multiple-choice' | 'text' | 'textarea';
  question: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

export interface QuizHeaderProps {
  title: string;
  subtitle: string;
}

export interface QuizStepperProps {
  steps: string[];
  currentStep: number;
}

export interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

export interface QuizNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  canProceed: boolean;
}

export interface QuizQuestionsProps {
  questions: Question[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
}

export interface QuizPageState {
  currentStep: number;
  answers: Record<string, string>;
}
