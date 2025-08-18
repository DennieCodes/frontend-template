import React from 'react';
import {
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Typography,
  Chip,
} from '@mui/material';
import {
  LocalShipping,
  Star,
} from '@mui/icons-material';
import { ShippingMethodSelectorProps } from '../../types/checkout';

const ShippingMethodSelector: React.FC<ShippingMethodSelectorProps> = ({
  selectedMethod,
  availableMethods,
  onMethodSelect,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LocalShipping />
        Shipping Method
      </Typography>

      <RadioGroup
        value={selectedMethod.id}
        onChange={(e) => {
          const method = availableMethods.find(m => m.id === e.target.value);
          if (method) {
            onMethodSelect(method);
          }
        }}
      >
        {availableMethods.map((method) => (
          <Card
            key={method.id}
            variant="outlined"
            sx={{
              mb: 2,
              border: selectedMethod.id === method.id ? 2 : 1,
              borderColor: selectedMethod.id === method.id ? 'primary.main' : 'divider',
            }}
          >
            <CardContent sx={{ py: 2, '&:last-child': { pb: 2 } }}>
              <FormControlLabel
                value={method.id}
                control={<Radio />}
                label={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {method.name}
                        {method.isRecommended && (
                          <Chip
                            label="Recommended"
                            size="small"
                            color="primary"
                            icon={<Star />}
                            sx={{ ml: 1 }}
                          />
                        )}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {method.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Estimated delivery: {method.estimatedDays}
                      </Typography>
                    </Box>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                      {formatPrice(method.price)}
                    </Typography>
                  </Box>
                }
                sx={{ width: '100%', margin: 0 }}
              />
            </CardContent>
          </Card>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default ShippingMethodSelector;
