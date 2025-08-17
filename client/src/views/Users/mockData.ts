import { User, Badge, SocialLink, UserPreferences } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'johndoe',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Full-stack developer passionate about creating meaningful applications. Love working with React, TypeScript, and Node.js.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    joinDate: '2023-01-15',
    lastActive: '2024-01-20T10:30:00Z',
    isVerified: true,
    isOnline: true,
    role: 'user',
    followersCount: 1247,
    followingCount: 89,
    postsCount: 45,
    reputation: 2840,
    badges: [
      {
        id: '1',
        name: 'Early Adopter',
        description: 'Joined during the beta phase',
        icon: '🌟',
        color: '#FFD700',
        earnedAt: '2023-01-15',
      },
      {
        id: '2',
        name: 'Helpful Contributor',
        description: 'Provided valuable help to the community',
        icon: '🤝',
        color: '#4CAF50',
        earnedAt: '2023-06-20',
      },
    ],
    socialLinks: [
      {
        platform: 'twitter',
        url: 'https://twitter.com/johndoe',
        username: '@johndoe',
      },
      {
        platform: 'github',
        url: 'https://github.com/johndoe',
        username: 'johndoe',
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/johndoe',
        username: 'john-doe',
      },
    ],
    preferences: {
      theme: 'dark',
      language: 'en',
      emailNotifications: true,
      pushNotifications: false,
      privacyLevel: 'public',
    },
  },
  {
    id: '2',
    username: 'janesmith',
    email: 'jane.smith@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'UX/UI Designer with 5+ years of experience. Creating beautiful and functional user experiences.',
    location: 'New York, NY',
    website: 'https://janesmith.design',
    joinDate: '2023-03-22',
    lastActive: '2024-01-19T15:45:00Z',
    isVerified: true,
    isOnline: false,
    role: 'moderator',
    followersCount: 892,
    followingCount: 156,
    postsCount: 23,
    reputation: 1950,
    badges: [
      {
        id: '3',
        name: 'Community Moderator',
        description: 'Trusted community leader',
        icon: '🛡️',
        color: '#2196F3',
        earnedAt: '2023-09-10',
      },
    ],
    socialLinks: [
      {
        platform: 'twitter',
        url: 'https://twitter.com/janesmith',
        username: '@janesmith',
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/janesmith',
        username: 'jane-smith',
      },
    ],
    preferences: {
      theme: 'light',
      language: 'en',
      emailNotifications: true,
      pushNotifications: true,
      privacyLevel: 'friends',
    },
  },
  {
    id: '3',
    username: 'mikejohnson',
    email: 'mike.johnson@example.com',
    firstName: 'Mike',
    lastName: 'Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'DevOps engineer and cloud enthusiast. AWS certified, Kubernetes expert.',
    location: 'Austin, TX',
    website: 'https://mikejohnson.tech',
    joinDate: '2023-05-10',
    lastActive: '2024-01-20T08:15:00Z',
    isVerified: false,
    isOnline: true,
    role: 'user',
    followersCount: 445,
    followingCount: 67,
    postsCount: 12,
    reputation: 890,
    badges: [
      {
        id: '4',
        name: 'Knowledge Seeker',
        description: 'Actively learning and sharing knowledge',
        icon: '📚',
        color: '#9C27B0',
        earnedAt: '2023-08-15',
      },
    ],
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/mikejohnson',
        username: 'mikejohnson',
      },
    ],
    preferences: {
      theme: 'auto',
      language: 'en',
      emailNotifications: false,
      pushNotifications: true,
      privacyLevel: 'public',
    },
  },
  {
    id: '4',
    username: 'sarahwilson',
    email: 'sarah.wilson@example.com',
    firstName: 'Sarah',
    lastName: 'Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Product Manager passionate about building products that make a difference. Love working with cross-functional teams.',
    location: 'Seattle, WA',
    website: 'https://sarahwilson.pm',
    joinDate: '2023-02-08',
    lastActive: '2024-01-18T20:30:00Z',
    isVerified: true,
    isOnline: false,
    role: 'user',
    followersCount: 678,
    followingCount: 234,
    postsCount: 34,
    reputation: 1560,
    badges: [
      {
        id: '5',
        name: 'Product Expert',
        description: 'Demonstrated expertise in product management',
        icon: '🎯',
        color: '#FF5722',
        earnedAt: '2023-11-05',
      },
    ],
    socialLinks: [
      {
        platform: 'twitter',
        url: 'https://twitter.com/sarahwilson',
        username: '@sarahwilson',
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/sarahwilson',
        username: 'sarah-wilson',
      },
    ],
    preferences: {
      theme: 'light',
      language: 'en',
      emailNotifications: true,
      pushNotifications: true,
      privacyLevel: 'friends',
    },
  },
  {
    id: '5',
    username: 'alexbrown',
    email: 'alex.brown@example.com',
    firstName: 'Alex',
    lastName: 'Brown',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    bio: 'Frontend developer specializing in React and modern JavaScript. Building accessible and performant web applications.',
    location: 'Portland, OR',
    website: 'https://alexbrown.dev',
    joinDate: '2023-07-14',
    lastActive: '2024-01-20T12:00:00Z',
    isVerified: false,
    isOnline: true,
    role: 'user',
    followersCount: 334,
    followingCount: 89,
    postsCount: 18,
    reputation: 720,
    badges: [],
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/alexbrown',
        username: 'alexbrown',
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/alexbrown',
        username: '@alexbrown',
      },
    ],
    preferences: {
      theme: 'dark',
      language: 'en',
      emailNotifications: false,
      pushNotifications: false,
      privacyLevel: 'public',
    },
  },
];

export const mockCurrentUser: User = mockUsers[0];

export const mockUserProfileData = {
  user: mockCurrentUser,
  isOwnProfile: true,
};

export const mockUserProfileHeaderData = {
  user: mockCurrentUser,
  isOwnProfile: true,
};

export const mockUserProfileStatsData = {
  user: mockCurrentUser,
};

export const mockUserProfileBioData = {
  user: mockCurrentUser,
  isOwnProfile: true,
};

export const mockUserProfileBadgesData = {
  badges: mockCurrentUser.badges,
};

export const mockUserProfileSocialLinksData = {
  socialLinks: mockCurrentUser.socialLinks,
};

export const mockUserProfileActivityData = {
  userId: mockCurrentUser.id,
  activityType: 'all',
};

export const mockUserProfileSettingsData = {
  user: mockCurrentUser,
};

export const mockUserCardData = {
  user: mockUsers[1],
  variant: 'default',
  showActions: true,
};

export const mockUserGridData = {
  users: mockUsers,
  columns: 3,
  spacing: 2,
  variant: 'default',
  showActions: true,
};

export const mockUserDirectoryData = {
  users: mockUsers,
  title: 'Community Members',
  subtitle: 'Discover and connect with other users',
  showFilters: true,
};
