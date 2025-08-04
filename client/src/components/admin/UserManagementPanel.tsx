import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon
} from '@mui/icons-material';

const UserManagementPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title="User Management"
        action={
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
          >
            Add User
          </Button>
        }
      />
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Manage user accounts, permissions, and access levels
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
          <Box sx={{ flex: 1, position: 'relative' }}>
            <SearchIcon sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'text.secondary' }} />
            <input
              placeholder="Search users..."
              style={{
                width: '100%',
                padding: '8px 8px 8px 40px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </Box>
          <Button variant="outlined" size="small">
            Filter
          </Button>
        </Box>

        {/* Users Table */}
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last Login</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>
                  <Chip label="Admin" size="small" color="primary" />
                </TableCell>
                <TableCell>
                  <Chip label="Active" size="small" color="success" />
                </TableCell>
                <TableCell>2024-01-15 10:30</TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>
                  <Chip label="User" size="small" color="default" />
                </TableCell>
                <TableCell>
                  <Chip label="Active" size="small" color="success" />
                </TableCell>
                <TableCell>2024-01-14 15:45</TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Wilson</TableCell>
                <TableCell>bob@example.com</TableCell>
                <TableCell>
                  <Chip label="Moderator" size="small" color="secondary" />
                </TableCell>
                <TableCell>
                  <Chip label="Inactive" size="small" color="warning" />
                </TableCell>
                <TableCell>2024-01-10 09:15</TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Showing 1-3 of 3 users
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button size="small" disabled>Previous</Button>
            <Button size="small" variant="contained">1</Button>
            <Button size="small" disabled>Next</Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserManagementPanel;