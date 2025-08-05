import React from 'react';
import {
  Container,
  Typography,
  Box,
  Breadcrumbs,
  Link,
  Paper,
  Divider
} from '@mui/material';
import {
  Home as HomeIcon,
  Description as TermsIcon
} from '@mui/icons-material';

const TermsOfService: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TermsIcon sx={{ mr: 0.5 }} fontSize="small" />
            <Typography color="text.primary">Terms of Service</Typography>
          </Box>
        </Breadcrumbs>

        <Typography variant="h3" component="h1" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Box>

      {/* Terms Content */}
      <Paper sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          Welcome to our platform. These Terms of Service ("Terms") govern your use of our website and services.
          By accessing or using our services, you agree to be bound by these Terms.
        </Typography>

        {/* Acceptance of Terms */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            If you do not agree to abide by the above, please do not use this service.
          </Typography>
        </Box>

        {/* Services Description */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            2. Description of Service
          </Typography>
          <Typography variant="body1" paragraph>
            We provide a platform that offers various digital services including but not limited to content management,
            user account management, and interactive features. The specific services available may change from time to time.
          </Typography>
        </Box>

        {/* User Obligations */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            3. User Obligations
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              Use the service in any way that violates any applicable federal, state, local, or international law or regulation
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Transmit, or procure the sending of, any advertising or promotional material without our prior written consent
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service
            </Typography>
          </Box>
        </Box>

        {/* Intellectual Property */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            4. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" paragraph>
            The service and its original content, features, and functionality are and will remain the exclusive property of
            the Company and its licensors. The service is protected by copyright, trademark, and other laws.
          </Typography>
        </Box>

        {/* Privacy Policy */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            5. Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service,
            to understand our practices.
          </Typography>
        </Box>

        {/* Termination */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            6. Termination
          </Typography>
          <Typography variant="body1" paragraph>
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability,
            under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </Typography>
        </Box>

        {/* Limitation of Liability */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            7. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            In no event shall the Company, nor its directors, employees, partners, agents, suppliers, or affiliates,
            be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
            loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
          </Typography>
        </Box>

        {/* Governing Law */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            8. Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These Terms shall be interpreted and governed by the laws of the jurisdiction in which the Company operates,
            without regard to its conflict of law provisions.
          </Typography>
        </Box>

        {/* Changes to Terms */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            9. Changes to Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
            If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            10. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about these Terms of Service, please contact us at:
          </Typography>
          <Typography variant="body1" paragraph>
            Email: legal@company.com<br />
            Address: 123 Business Street, City, State<br />
            Phone: +1 (555) 123-4567
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          These terms were last updated on {new Date().toLocaleDateString()}
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsOfService;