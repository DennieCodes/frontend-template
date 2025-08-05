import React from 'react';
import ResourceDirectory from '../components/ResourceDirectory';
import { Resource } from '../types/resource';

// Mock data for demonstration
const mockResources: Resource[] = [
  {
    id: '1',
    name: 'Community Health Center',
    description: 'Comprehensive healthcare services for the local community including primary care, dental, and mental health services.',
    category: 'Healthcare',
    subcategory: 'Primary Care',
    location: {
      city: 'Springfield',
      state: 'IL',
      country: 'USA',
      coordinates: { lat: 39.7817, lng: -89.6501 }
    },
    contact: {
      phone: '(555) 123-4567',
      email: 'info@communityhealth.org',
      website: 'https://communityhealth.org'
    },
    services: ['Primary Care', 'Dental Care', 'Mental Health', 'Vaccinations'],
    tags: ['healthcare', 'community', 'affordable', 'sliding-scale'],
    rating: 4.5,
    reviewCount: 127,
    imageUrl: '/images/health-center.jpg',
    featured: true,
    verified: true,
    hours: {
      monday: { open: '8:00 AM', close: '6:00 PM' },
      tuesday: { open: '8:00 AM', close: '6:00 PM' },
      wednesday: { open: '8:00 AM', close: '6:00 PM' },
      thursday: { open: '8:00 AM', close: '6:00 PM' },
      friday: { open: '8:00 AM', close: '5:00 PM' },
      saturday: { open: '9:00 AM', close: '2:00 PM' },
      sunday: { closed: true }
    },
    pricing: {
      range: 'low',
      description: 'Sliding scale based on income'
    },
    accessibility: ['Wheelchair Accessible', 'ASL Interpreter Available', 'Large Print Materials'],
    languages: ['English', 'Spanish'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Food Bank Distribution Center',
    description: 'Emergency food assistance and nutrition education for families in need.',
    category: 'Social Services',
    subcategory: 'Food Assistance',
    location: {
      city: 'Springfield',
      state: 'IL',
      country: 'USA',
      coordinates: { lat: 39.7817, lng: -89.6501 }
    },
    contact: {
      phone: '(555) 987-6543',
      email: 'help@foodbank.org',
      website: 'https://foodbank.org'
    },
    services: ['Emergency Food', 'Nutrition Education', 'SNAP Assistance', 'Community Gardens'],
    tags: ['food', 'emergency', 'nutrition', 'free'],
    rating: 4.8,
    reviewCount: 89,
    imageUrl: '/images/food-bank.jpg',
    featured: false,
    verified: true,
    hours: {
      monday: { open: '9:00 AM', close: '4:00 PM' },
      tuesday: { open: '9:00 AM', close: '4:00 PM' },
      wednesday: { open: '9:00 AM', close: '4:00 PM' },
      thursday: { open: '9:00 AM', close: '4:00 PM' },
      friday: { open: '9:00 AM', close: '4:00 PM' },
      saturday: { open: '10:00 AM', close: '2:00 PM' },
      sunday: { closed: true }
    },
    pricing: {
      range: 'free',
      description: 'Free for qualifying individuals'
    },
    accessibility: ['Wheelchair Accessible', 'Drive-through Service'],
    languages: ['English', 'Spanish'],
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z'
  },
  {
    id: '3',
    name: 'Legal Aid Society',
    description: 'Free legal services for low-income individuals including family law, housing, and immigration assistance.',
    category: 'Legal Services',
    subcategory: 'Civil Rights',
    location: {
      city: 'Springfield',
      state: 'IL',
      country: 'USA',
      coordinates: { lat: 39.7817, lng: -89.6501 }
    },
    contact: {
      phone: '(555) 456-7890',
      email: 'legal@legalaid.org',
      website: 'https://legalaid.org'
    },
    services: ['Family Law', 'Housing Law', 'Immigration', 'Civil Rights', 'Bankruptcy'],
    tags: ['legal', 'free', 'civil-rights', 'immigration'],
    rating: 4.6,
    reviewCount: 156,
    imageUrl: '/images/legal-aid.jpg',
    featured: true,
    verified: true,
    hours: {
      monday: { open: '8:30 AM', close: '5:00 PM' },
      tuesday: { open: '8:30 AM', close: '5:00 PM' },
      wednesday: { open: '8:30 AM', close: '5:00 PM' },
      thursday: { open: '8:30 AM', close: '5:00 PM' },
      friday: { open: '8:30 AM', close: '5:00 PM' },
      saturday: { closed: true },
      sunday: { closed: true }
    },
    pricing: {
      range: 'free',
      description: 'Free for qualifying individuals'
    },
    accessibility: ['Wheelchair Accessible', 'ASL Interpreter Available'],
    languages: ['English', 'Spanish', 'French'],
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z'
  },
  {
    id: '4',
    name: 'Youth Employment Center',
    description: 'Job training, placement, and career development services for young adults aged 16-24.',
    category: 'Employment',
    subcategory: 'Job Training',
    location: {
      city: 'Springfield',
      state: 'IL',
      country: 'USA',
      coordinates: { lat: 39.7817, lng: -89.6501 }
    },
    contact: {
      phone: '(555) 234-5678',
      email: 'careers@youthjobs.org',
      website: 'https://youthjobs.org'
    },
    services: ['Job Training', 'Career Counseling', 'Resume Building', 'Interview Prep', 'Job Placement'],
    tags: ['employment', 'youth', 'training', 'career'],
    rating: 4.3,
    reviewCount: 73,
    imageUrl: '/images/youth-center.jpg',
    featured: false,
    verified: true,
    hours: {
      monday: { open: '9:00 AM', close: '5:00 PM' },
      tuesday: { open: '9:00 AM', close: '5:00 PM' },
      wednesday: { open: '9:00 AM', close: '5:00 PM' },
      thursday: { open: '9:00 AM', close: '5:00 PM' },
      friday: { open: '9:00 AM', close: '5:00 PM' },
      saturday: { open: '10:00 AM', close: '3:00 PM' },
      sunday: { closed: true }
    },
    pricing: {
      range: 'free',
      description: 'Free for eligible youth'
    },
    accessibility: ['Wheelchair Accessible', 'Computer Lab'],
    languages: ['English', 'Spanish'],
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-12T10:00:00Z'
  },
  {
    id: '5',
    name: 'Mental Health Crisis Center',
    description: '24/7 crisis intervention, counseling, and mental health support services.',
    category: 'Healthcare',
    subcategory: 'Mental Health',
    location: {
      city: 'Springfield',
      state: 'IL',
      country: 'USA',
      coordinates: { lat: 39.7817, lng: -89.6501 }
    },
    contact: {
      phone: '(555) 911-0000',
      email: 'crisis@mentalhealth.org',
      website: 'https://mentalhealth.org'
    },
    services: ['Crisis Intervention', 'Counseling', 'Suicide Prevention', 'Support Groups', 'Referrals'],
    tags: ['mental-health', 'crisis', 'counseling', '24-7'],
    rating: 4.7,
    reviewCount: 234,
    imageUrl: '/images/crisis-center.jpg',
    featured: true,
    verified: true,
    hours: {
      monday: { open: '24 Hours', close: '24 Hours' },
      tuesday: { open: '24 Hours', close: '24 Hours' },
      wednesday: { open: '24 Hours', close: '24 Hours' },
      thursday: { open: '24 Hours', close: '24 Hours' },
      friday: { open: '24 Hours', close: '24 Hours' },
      saturday: { open: '24 Hours', close: '24 Hours' },
      sunday: { open: '24 Hours', close: '24 Hours' }
    },
    pricing: {
      range: 'free',
      description: 'Free crisis services'
    },
    accessibility: ['Wheelchair Accessible', 'Private Rooms', 'Quiet Space'],
    languages: ['English', 'Spanish', 'ASL'],
    createdAt: '2024-01-08T10:00:00Z',
    updatedAt: '2024-01-08T10:00:00Z'
  },
  {
    id: '6',
    name: 'Housing Assistance Program',
    description: 'Emergency shelter, transitional housing, and permanent housing support for individuals and families.',
    category: 'Social Services',
    subcategory: 'Housing',
    location: {
      city: 'Springfield',
      state: 'IL',
      country: 'USA',
      coordinates: { lat: 39.7817, lng: -89.6501 }
    },
    contact: {
      phone: '(555) 345-6789',
      email: 'housing@assistance.org',
      website: 'https://housingassistance.org'
    },
    services: ['Emergency Shelter', 'Transitional Housing', 'Housing Search', 'Rent Assistance', 'Case Management'],
    tags: ['housing', 'shelter', 'emergency', 'transitional'],
    rating: 4.4,
    reviewCount: 98,
    imageUrl: '/images/housing-assistance.jpg',
    featured: false,
    verified: true,
    hours: {
      monday: { open: '8:00 AM', close: '6:00 PM' },
      tuesday: { open: '8:00 AM', close: '6:00 PM' },
      wednesday: { open: '8:00 AM', close: '6:00 PM' },
      thursday: { open: '8:00 AM', close: '6:00 PM' },
      friday: { open: '8:00 AM', close: '6:00 PM' },
      saturday: { open: '9:00 AM', close: '3:00 PM' },
      sunday: { open: '9:00 AM', close: '3:00 PM' }
    },
    pricing: {
      range: 'low',
      description: 'Sliding scale based on income'
    },
    accessibility: ['Wheelchair Accessible', 'Family Units Available'],
    languages: ['English', 'Spanish'],
    createdAt: '2024-01-03T10:00:00Z',
    updatedAt: '2024-01-03T10:00:00Z'
  }
];

const ResourcesDirectoryPage: React.FC = () => {
  const handleResourceClick = (resource: Resource) => {
    // This would typically navigate to the resource detail page
    console.log('Resource clicked:', resource.name);
    // In a real app, you would use React Router to navigate
    // navigate(`/resources/${resource.id}`);
  };

  return (
    <ResourceDirectory
      resources={mockResources}
      title="Community Resources"
      subtitle="Find services and support in your area"
      showFilters={true}
      onResourceClick={handleResourceClick}
    />
  );
};

export default ResourcesDirectoryPage;