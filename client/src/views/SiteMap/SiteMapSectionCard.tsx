import React from 'react';
import {
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { SiteMapSectionCardProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const SiteMapSectionCard: React.FC<SiteMapSectionCardProps> = ({ section }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        maxWidth: layoutUtils.getContentWidth('standard'),
      }}
    >
      <Box
        sx={{
          p: LAYOUT_CONSTANTS.SPACING.MD,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          alignItems: 'center',
          gap: LAYOUT_CONSTANTS.SPACING.MD,
        }}
      >
        {section.icon}
        <Typography
          variant="h6"
          sx={{
            ...typographyStyles.title,
            fontWeight: 600,
          }}
        >
          {section.title}
        </Typography>
      </Box>

      <Box sx={{ p: 0 }}>
        <List sx={{ p: 0 }}>
          {section.items.map((item, itemIndex) => (
            <React.Fragment key={itemIndex}>
              <ListItem
                sx={{
                  px: LAYOUT_CONSTANTS.SPACING.MD,
                  py: LAYOUT_CONSTANTS.SPACING.MD,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      to={item.path}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </Link>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        ...typographyStyles.body,
                        mt: 0.5,
                      }}
                    >
                      {item.description}
                    </Typography>
                  }
                />
              </ListItem>
              {itemIndex < section.items.length - 1 && (
                <Divider sx={{ ml: 6 }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default SiteMapSectionCard;
