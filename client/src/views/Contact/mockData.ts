import React from 'react';
import { Email, Phone, LocationOn, AccessTime } from '@mui/icons-material';
import { ContactInfo, FAQItem } from './types';

export const contactInfo: ContactInfo[] = [
  {
    type: 'email',
    icon: <Email />,
    title: 'Email',
    content: 'hello@company.com'
  },
  {
    type: 'phone',
    icon: <Phone />,
    title: 'Phone',
    content: '+1 (555) 123-4567'
  },
  {
    type: 'address',
    icon: <LocationOn />,
    title: 'Address',
    content: [
      '123 Business Street',
      'Suite 100',
      'City, State 12345'
    ]
  },
  {
    type: 'hours',
    icon: <AccessTime />,
    title: 'Business Hours',
    content: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 10:00 AM - 4:00 PM',
      'Sunday: Closed'
    ]
  }
];

export const faqItems: FAQItem[] = [
  {
    question: 'How quickly do you respond?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.'
  },
  {
    question: 'Do you offer support?',
    answer: 'Yes, we provide comprehensive support for all our products and services.'
  },
  {
    question: 'Can I schedule a meeting?',
    answer: 'Absolutely! Contact us to schedule a consultation or demo session.'
  }
];
