import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';
import {
  Article as PostIcon,
  Comment as CommentIcon,
  ThumbUp as LikeIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';
import { UserProfileActivityProps } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserProfileActivity: React.FC<UserProfileActivityProps> = ({ userId, activityType = 'all' }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  // Mock activity data - in a real app, this would come from an API
  const mockActivity = [
    {
      id: '1',
      type: 'post',
      title: 'How to implement dark mode in React',
      content: 'Just published a comprehensive guide on implementing dark mode...',
      timestamp: '2024-01-20T10:30:00Z',
      likes: 24,
      comments: 8,
    },
    {
      id: '2',
      type: 'comment',
      title: 'Re: Best practices for TypeScript',
      content: 'Great article! I would also recommend using strict mode...',
      timestamp: '2024-01-19T15:45:00Z',
      likes: 12,
      comments: 3,
    },
    {
      id: '3',
      type: 'like',
      title: 'Liked: Advanced CSS Grid Techniques',
      content: 'This tutorial is fantastic! Really helped me understand...',
      timestamp: '2024-01-18T09:20:00Z',
      likes: 0,
      comments: 0,
    },
    {
      id: '4',
      type: 'post',
      title: 'My experience with Next.js 14',
      content: 'After migrating our app to Next.js 14, here are the key benefits...',
      timestamp: '2024-01-17T14:15:00Z',
      likes: 45,
      comments: 12,
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'post':
        return <PostIcon />;
      case 'comment':
        return <CommentIcon />;
      case 'like':
        return <LikeIcon />;
      default:
        return <MoreIcon />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'post':
        return 'primary.main';
      case 'comment':
        return 'secondary.main';
      case 'like':
        return 'success.main';
      default:
        return 'grey.500';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const filteredActivity = activityType === 'all'
    ? mockActivity
    : mockActivity.filter(activity => activity.type === activityType);

  return (
    <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.XL }}>
      <Typography variant="h5" component="h2" sx={{ mb: LAYOUT_CONSTANTS.SPACING.MD }}>
        Recent Activity
      </Typography>

      <Card sx={{ bgcolor: 'background.paper' }}>
        <CardContent sx={{ p: 0 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}
          >
            <Tab label="All" />
            <Tab label="Posts" />
            <Tab label="Comments" />
            <Tab label="Likes" />
          </Tabs>

          <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
            {filteredActivity.length > 0 ? (
              <List>
                {filteredActivity.map((activity) => (
                  <ListItem
                    key={activity.id}
                    sx={{
                      borderBottom: 1,
                      borderColor: 'divider',
                      '&:last-child': {
                        borderBottom: 0,
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor: getActivityColor(activity.type),
                          width: 40,
                          height: 40,
                        }}
                      >
                        {getActivityIcon(activity.type)}
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography variant="subtitle1" fontWeight="bold">
                            {activity.title}
                          </Typography>
                          <Chip
                            label={activity.type}
                            size="small"
                            variant="outlined"
                            sx={{
                              textTransform: 'capitalize',
                              fontSize: '0.75rem',
                            }}
                          />
                        </Stack>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {activity.content}
                          </Typography>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Typography variant="caption" color="text.secondary">
                              {formatTimestamp(activity.timestamp)}
                            </Typography>
                            {activity.likes > 0 && (
                              <Typography variant="caption" color="text.secondary">
                                ❤️ {activity.likes}
                              </Typography>
                            )}
                            {activity.comments > 0 && (
                              <Typography variant="caption" color="text.secondary">
                                💬 {activity.comments}
                              </Typography>
                            )}
                          </Stack>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  No activity to show yet.
                </Typography>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfileActivity;
