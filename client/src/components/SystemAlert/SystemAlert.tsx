import React from 'react';
import { useSelector } from 'react-redux';
import AlertBanner from '../AlertBanner';

// This is a placeholder interface - you would define this based on your actual Redux store structure
interface SystemMessage {
  id: string;
  message: string;
  title?: string;
  type: 'info' | 'success' | 'warning' | 'error';
  dismissible: boolean;
  show: boolean;
}

interface RootState {
  system: {
    messages: SystemMessage[];
  };
}

const SystemAlert: React.FC = () => {
  // This is a placeholder - you would connect to your actual Redux store
  // const systemMessages = useSelector((state: RootState) => state.system.messages);

  // For demo purposes, we'll use a static message
  const demoMessage: SystemMessage = {
    id: '1',
    message: 'System maintenance scheduled for tonight at 2 AM EST.',
    title: 'System Notice',
    type: 'info',
    dismissible: true,
    show: true
  };

  const handleDismiss = (messageId: string) => {
    // Here you would dispatch an action to remove the message from the store
    console.log(`Dismissed message: ${messageId}`);
  };

  // In a real implementation, you would map over systemMessages
  // For now, we'll just show the demo message
  return (
    <>
      {demoMessage.show && (
        <AlertBanner
          key={demoMessage.id}
          message={demoMessage.message}
          title={demoMessage.title}
          severity={demoMessage.type}
          dismissible={demoMessage.dismissible}
          onDismiss={() => handleDismiss(demoMessage.id)}
          show={demoMessage.show}
        />
      )}
    </>
  );
};

export default SystemAlert;