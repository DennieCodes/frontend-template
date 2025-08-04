import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as SuccessIcon,
  FilterList as FilterIcon,
  Download as DownloadIcon
} from '@mui/icons-material';

const SystemLogsPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title="System Logs"
        action={
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            size="small"
          >
            Export Logs
          </Button>
        }
      />
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Monitor system activities, errors, and user actions
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            size="small"
            placeholder="Search logs..."
            sx={{ minWidth: 200 }}
          />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Level</InputLabel>
            <Select label="Level" defaultValue="all">
              <MenuItem value="all">All Levels</MenuItem>
              <MenuItem value="info">Info</MenuItem>
              <MenuItem value="warning">Warning</MenuItem>
              <MenuItem value="error">Error</MenuItem>
              <MenuItem value="success">Success</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Time Range</InputLabel>
            <Select label="Time Range" defaultValue="24h">
              <MenuItem value="1h">Last Hour</MenuItem>
              <MenuItem value="24h">Last 24 Hours</MenuItem>
              <MenuItem value="7d">Last 7 Days</MenuItem>
              <MenuItem value="30d">Last 30 Days</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            size="small"
          >
            Apply Filters
          </Button>
        </Box>

        {/* Logs List */}
        <List sx={{ maxHeight: 400, overflow: 'auto', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemIcon>
              <InfoIcon color="info" />
            </ListItemIcon>
            <ListItemText
              primary="User login successful"
              secondary={
                <Box>
                  <Typography variant="body2" component="span">
                    User ID: 12345 • IP: 192.168.1.100 • 2024-01-15 14:30:25
                  </Typography>
                  <Chip label="Authentication" size="small" sx={{ ml: 1 }} />
                </Box>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SuccessIcon color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Database backup completed"
              secondary={
                <Box>
                  <Typography variant="body2" component="span">
                    Backup ID: BK-2024-001 • Size: 2.5GB • 2024-01-15 14:00:00
                  </Typography>
                  <Chip label="System" size="small" sx={{ ml: 1 }} />
                </Box>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <WarningIcon color="warning" />
            </ListItemIcon>
            <ListItemText
              primary="High memory usage detected"
              secondary={
                <Box>
                  <Typography variant="body2" component="span">
                    Memory usage: 85% • Server: web-01 • 2024-01-15 13:45:12
                  </Typography>
                  <Chip label="Performance" size="small" sx={{ ml: 1 }} />
                </Box>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ErrorIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="Failed login attempt"
              secondary={
                <Box>
                  <Typography variant="body2" component="span">
                    User: admin@example.com • IP: 203.0.113.45 • 2024-01-15 13:20:33
                  </Typography>
                  <Chip label="Security" size="small" sx={{ ml: 1 }} />
                </Box>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <InfoIcon color="info" />
            </ListItemIcon>
            <ListItemText
              primary="New user registration"
              secondary={
                <Box>
                  <Typography variant="body2" component="span">
                    User: jane.smith@example.com • 2024-01-15 12:15:08
                  </Typography>
                  <Chip label="User Management" size="small" sx={{ ml: 1 }} />
                </Box>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SuccessIcon color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Email notification sent"
              secondary={
                <Box>
                  <Typography variant="body2" component="span">
                    Recipient: user@example.com • Template: welcome • 2024-01-15 12:10:45
                  </Typography>
                  <Chip label="Notifications" size="small" sx={{ ml: 1 }} />
                </Box>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <WarningIcon color="warning" />
            </ListItemIcon>
            <ListItemText
              primary="API rate limit approaching"
              secondary={
                <Box>
                  <Typography variant="body2" component="span">
                    Endpoint: /api/users • Usage: 95% • 2024-01-15 11:55:20
                  </Typography>
                  <Chip label="API" size="small" sx={{ ml: 1 }} />
                </Box>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <InfoIcon color="info" />
            </ListItemIcon>
            <ListItemText
              primary="Scheduled task completed"
              secondary={
                <Box>
                  <Typography variant="body2" component="span">
                    Task: cleanup_temp_files • Duration: 45s • 2024-01-15 11:30:00
                  </Typography>
                  <Chip label="Scheduler" size="small" sx={{ ml: 1 }} />
                </Box>
              }
            />
          </ListItem>
        </List>

        {/* Pagination */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Showing 1-8 of 1,247 log entries
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button size="small" disabled>Previous</Button>
            <Button size="small" variant="contained">1</Button>
            <Button size="small">2</Button>
            <Button size="small">3</Button>
            <Button size="small">Next</Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SystemLogsPanel;