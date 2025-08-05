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
  Security as PrivacyIcon
} from '@mui/icons-material';

const PrivacyPolicy: React.FC = () => {
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
            <PrivacyIcon sx={{ mr: 0.5 }} fontSize="small" />
            <Typography color="text.primary">Privacy Policy</Typography>
          </Box>
        </Breadcrumbs>

        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Box>

      {/* Privacy Content */}
      <Paper sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website or use our services.
        </Typography>

        {/* Information We Collect */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
            1. Information We Collect
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
            Personal Information
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect personal information that you voluntarily provide to us when you:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              Register for an account
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Subscribe to our newsletter
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Contact us for support
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Participate in surveys or promotions
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            This information may include your name, email address, phone number, and other contact details.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
            Automatically Collected Information
          </Typography>
          <Typography variant="body1" paragraph>
            When you visit our website, we automatically collect certain information about your device, including:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              IP address and location data
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Browser type and version
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Operating system
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Pages visited and time spent on each page
            </Typography>
          </Box>
        </Box>

        {/* How We Use Your Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              Provide and maintain our services
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Process transactions and send related information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Send you technical notices and support messages
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Respond to your comments and questions
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Improve our website and services
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Comply with legal obligations
            </Typography>
          </Box>
        </Box>

        {/* Information Sharing */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            3. Information Sharing and Disclosure
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
            except in the following circumstances:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              With your explicit consent
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To comply with legal obligations or court orders
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              To protect our rights, property, or safety
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              With trusted service providers who assist us in operating our website
            </Typography>
          </Box>
        </Box>

        {/* Data Security */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
            the internet or electronic storage is 100% secure.
          </Typography>
        </Box>

        {/* Cookies and Tracking */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            5. Cookies and Tracking Technologies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              Remember your preferences and settings
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Analyze website traffic and usage patterns
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Provide personalized content and advertisements
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            You can control cookie settings through your browser preferences.
          </Typography>
        </Box>

        {/* Third-Party Links */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            6. Third-Party Links
          </Typography>
          <Typography variant="body1" paragraph>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices
            or content of these external sites. We encourage you to review their privacy policies.
          </Typography>
        </Box>

        {/* Your Rights */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            7. Your Rights and Choices
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              Access and receive a copy of your personal information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Update or correct your personal information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Request deletion of your personal information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Opt-out of marketing communications
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Object to processing of your personal information
            </Typography>
          </Box>
        </Box>

        {/* Children's Privacy */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            8. Children's Privacy
          </Typography>
          <Typography variant="body1" paragraph>
            Our services are not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you believe we have collected information from a child under 13,
            please contact us immediately.
          </Typography>
        </Box>

        {/* International Transfers */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            9. International Data Transfers
          </Typography>
          <Typography variant="body1" paragraph>
            Your information may be transferred to and processed in countries other than your own. We ensure that
            such transfers comply with applicable data protection laws.
          </Typography>
        </Box>

        {/* Changes to Privacy Policy */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            10. Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page and updating the "Last updated" date.
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            11. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Typography variant="body1" paragraph>
            Email: privacy@company.com<br />
            Address: 123 Business Street, City, State<br />
            Phone: +1 (555) 123-4567
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          This privacy policy was last updated on {new Date().toLocaleDateString()}
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;