import { User } from './types';

export interface UserProfilePageProps {
  user: User;
  isOwnProfile?: boolean;
}

declare const UserProfilePage: React.FC<UserProfilePageProps>;
export default UserProfilePage;
