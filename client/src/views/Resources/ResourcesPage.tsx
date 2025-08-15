import React, { useState, useMemo } from 'react';
import { Box } from '@mui/material';
import ResourcesHeader from './ResourcesHeader';
import ResourcesFilters from './ResourcesFilters';
import ResourcesSummary from './ResourcesSummary';
import ResourcesResults from './ResourcesResults';
import { Resource } from './types';
import { mockResources } from './mockData';
import { useNavigate } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);

  const navigate = useNavigate();

  // Get unique categories, subcategories, locations, and tags
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(mockResources.map(resource => resource.category))];
    return uniqueCategories.sort();
  }, []);

  const subcategories = useMemo(() => {
    const uniqueSubcategories = [...new Set(mockResources.map(resource => resource.subcategory).filter(Boolean))];
    return uniqueSubcategories.sort();
  }, []);

  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(mockResources.map(resource => `${resource.location.city}, ${resource.location.state}`))];
    return uniqueLocations.sort();
  }, []);

  const allTags = useMemo(() => {
    const tags = mockResources.flatMap(resource => resource.tags);
    const uniqueTags = [...new Set(tags)];
    return uniqueTags.sort();
  }, []);

  // Filter resources based on all criteria
  const filteredResources = useMemo(() => {
    return mockResources.filter(resource => {
      const matchesSearch = searchTerm === '' ||
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;

      const matchesSubcategory = selectedSubcategory === 'all' ||
        (resource.subcategory && resource.subcategory === selectedSubcategory);

      const matchesLocation = selectedLocation === 'all' ||
        `${resource.location.city}, ${resource.location.state}` === selectedLocation;

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => resource.tags.includes(tag));

      const matchesPrice = priceRange === 'all' ||
        (resource.pricing && resource.pricing.range === priceRange);

      const matchesRating = ratingFilter === 0 ||
        (resource.rating && resource.rating >= ratingFilter);

      const matchesVerified = !verifiedOnly || resource.verified;

      return matchesSearch && matchesCategory && matchesSubcategory &&
             matchesLocation && matchesTags && matchesPrice &&
             matchesRating && matchesVerified;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory,
      selectedLocation, selectedTags, priceRange, ratingFilter, verifiedOnly]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedLocation('all');
    setSelectedTags([]);
    setPriceRange('all');
    setRatingFilter(0);
    setVerifiedOnly(false);
  };

  const hasActiveFilters = searchTerm !== '' ||
    selectedCategory !== 'all' ||
    selectedSubcategory !== 'all' ||
    selectedLocation !== 'all' ||
    selectedTags.length > 0 ||
    priceRange !== 'all' ||
    ratingFilter > 0 ||
    verifiedOnly;

  const handleResourceClick = (resource: Resource) => {
    // Handle resource click
    navigate(`/resources/${resource.id}`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <ResourcesHeader
        title="Community Resources"
        subtitle="Find services and support in your area"
      />

      <ResourcesFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedSubcategory={selectedSubcategory}
        onSubcategoryChange={setSelectedSubcategory}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        ratingFilter={ratingFilter}
        onRatingFilterChange={setRatingFilter}
        verifiedOnly={verifiedOnly}
        onVerifiedOnlyChange={setVerifiedOnly}
        categories={categories}
        subcategories={subcategories}
        locations={locations}
        allTags={allTags}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />

      <ResourcesSummary
        filteredCount={filteredResources.length}
        totalCount={mockResources.length}
        hasActiveFilters={hasActiveFilters}
      />

      <ResourcesResults
        filteredResources={filteredResources}
        onResourceClick={handleResourceClick}
      />
    </Box>
  );
};

export default ResourcesPage;
