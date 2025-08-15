export interface SurveyQuestion {
  id: string;
  type: 'checkbox' | 'radio' | 'text' | 'textarea';
  question: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  allowMultiple?: boolean; // For checkbox questions
}

export interface SurveyHeaderProps {
  title: string;
  subtitle: string;
}

export interface SurveyStepperProps {
  steps: string[];
  currentStep: number;
}

export interface SurveyProgressProps {
  currentStep: number;
  totalSteps: number;
}

export interface SurveyNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  canProceed: boolean;
}

export interface SurveyQuestionsProps {
  questions: SurveyQuestion[];
  answers: Record<string, string | string[]>;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
}

export interface SurveyPageState {
  currentStep: number;
  answers: Record<string, string | string[]>;
}

export interface CheckboxQuestionProps {
  question: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  required?: boolean;
  allowMultiple?: boolean;
}

export interface RadioQuestionProps {
  question: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export interface TextQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export interface TextareaQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}
