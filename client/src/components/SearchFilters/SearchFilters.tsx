import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
  Divider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';

interface SearchFiltersProps {
  selectedTags: string[];
  onTagFilter: (tags: string[]) => void;
}

const availableTags = [
  'React', 'JavaScript', 'TypeScript', 'Frontend', 'Backend', 'API',
  'UI', 'UX', 'Components', 'Material-UI', 'Development', 'Programming',
  'Performance', 'Optimization', 'State Management', 'Redux', 'Toolkit',
  'Integration', 'REST', 'Advanced', 'Beginner', 'Intermediate'
];

const contentTypes = [
  { value: 'article', label: 'Articles' },
  { value: 'resource', label: 'Resources' },
  { value: 'page', label: 'Pages' },
];

const authors = [
  'John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'Design Team', 'Performance Team'
];

const SearchFilters: React.FC<SearchFiltersProps> = ({ selectedTags, onTagFilter }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<[number, number]>([0, 100]);
  const [readTimeRange, setReadTimeRange] = useState<[number, number]>([0, 20]);

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagFilter(newTags);
  };

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleAuthorToggle = (author: string) => {
    setSelectedAuthors(prev =>
      prev.includes(author)
        ? prev.filter(a => a !== author)
        : [...prev, author]
    );
  };

  const handleClearAll = () => {
    onTagFilter([]);
    setSelectedTypes([]);
    setSelectedAuthors([]);
    setDateRange([0, 100]);
    setReadTimeRange([0, 20]);
  };

  const handleApplyFilters = () => {
    // In a real app, this would apply all filters together
    console.log('Applying filters:', {
      tags: selectedTags,
      types: selectedTypes,
      authors: selectedAuthors,
      dateRange,
      readTimeRange,
    });
  };

  return (
    <Paper sx={{ p: 3, height: 'fit-content', position: 'sticky', top: 20 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" component="h2">
          <FilterListIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Filters
        </Typography>
        <Button
          size="small"
          startIcon={<ClearIcon />}
          onClick={handleClearAll}
          disabled={selectedTags.length === 0 && selectedTypes.length === 0 && selectedAuthors.length === 0}
        >
          Clear All
        </Button>
      </Box>

      <Stack spacing={3}>
        {/* Content Type Filter */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">Content Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              {contentTypes.map((type) => (
                <FormControlLabel
                  key={type.value}
                  control={
                    <Checkbox
                      checked={selectedTypes.includes(type.value)}
                      onChange={() => handleTypeToggle(type.value)}
                      size="small"
                    />
                  }
                  label={type.label}
                />
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Tags Filter */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">Tags</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {availableTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant={selectedTags.includes(tag) ? "filled" : "outlined"}
                  color={selectedTags.includes(tag) ? "primary" : "default"}
                  onClick={() => handleTagToggle(tag)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Author Filter */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">Author</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              {authors.map((author) => (
                <FormControlLabel
                  key={author}
                  control={
                    <Checkbox
                      checked={selectedAuthors.includes(author)}
                      onChange={() => handleAuthorToggle(author)}
                      size="small"
                    />
                  }
                  label={author}
                />
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Date Range Filter */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">Date Range</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ px: 1 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Days ago: {dateRange[0]} - {dateRange[1]}
              </Typography>
              <Slider
                value={dateRange}
                onChange={(_, newValue) => setDateRange(newValue as [number, number])}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                sx={{ mt: 2 }}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Read Time Filter */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">Read Time</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ px: 1 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Minutes: {readTimeRange[0]} - {readTimeRange[1]}
              </Typography>
              <Slider
                value={readTimeRange}
                onChange={(_, newValue) => setReadTimeRange(newValue as [number, number])}
                valueLabelDisplay="auto"
                min={0}
                max={20}
                sx={{ mt: 2 }}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Search within results */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">Search Within</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              size="small"
              placeholder="Search within results..."
              variant="outlined"
            />
          </AccordionDetails>
        </Accordion>

        <Divider />

        {/* Apply Filters Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleApplyFilters}
          disabled={selectedTags.length === 0 && selectedTypes.length === 0 && selectedAuthors.length === 0}
        >
          Apply Filters
        </Button>

        {/* Active Filters Summary */}
        {(selectedTags.length > 0 || selectedTypes.length > 0 || selectedAuthors.length > 0) && (
          <Box>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Active Filters:
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {selectedTags.map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  onDelete={() => handleTagToggle(tag)}
                />
              ))}
              {selectedTypes.map(type => (
                <Chip
                  key={type}
                  label={contentTypes.find(t => t.value === type)?.label || type}
                  size="small"
                  onDelete={() => handleTypeToggle(type)}
                />
              ))}
              {selectedAuthors.map(author => (
                <Chip
                  key={author}
                  label={author}
                  size="small"
                  onDelete={() => handleAuthorToggle(author)}
                />
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

export default SearchFilters;