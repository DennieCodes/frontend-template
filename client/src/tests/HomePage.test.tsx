import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../views/Home/HomePage';

// Mock the HomeHero component to avoid complex dependencies
jest.mock('../views/Home/HomeHero', () => {
  return function MockHomeHero({ title, subtitle, ctaText, onCtaClick }: any) {
    return (
      <div data-testid="home-hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button onClick={onCtaClick}>{ctaText}</button>
      </div>
    );
  };
});

describe('HomePage', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    // Basic test to ensure the component renders
    expect(screen.getByTestId('home-hero')).toBeInTheDocument();
  });
});
