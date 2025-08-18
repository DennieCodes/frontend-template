export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
  reputation: number;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  role: 'user' | 'admin' | 'moderator';
  isVerified: boolean;
  location?: string;
  website?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BaseUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
  reputation: number;
  followers: number;
  following: number;
  role: 'user' | 'admin' | 'moderator';
  isVerified: boolean;
  location?: string;
  website?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}
