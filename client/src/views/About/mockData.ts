import { Business, Lightbulb, Group, TrendingUp } from '@mui/icons-material';
import { AboutHeroProps, AboutMissionProps, AboutValuesProps, AboutTeamProps } from './types';

export const aboutHeroData: AboutHeroProps = {
  title: "About Our Company",
  subtitle: "We're passionate about creating innovative solutions that make a difference in people's lives."
};

export const aboutMissionData: AboutMissionProps = {
  title: "Our Mission",
  content: [
    "To deliver exceptional value to our customers through innovative technology solutions, while maintaining the highest standards of quality and customer service. We believe in creating products that not only meet current needs but anticipate future challenges.",
    "Our team is dedicated to continuous improvement and staying at the forefront of industry trends to provide cutting-edge solutions that drive success for our clients."
  ]
};

export const aboutValuesData: AboutValuesProps = {
  title: "Our Values",
  values: [
    {
      icon: Business,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: Group,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an environment of mutual respect and support."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality results that exceed expectations."
    }
  ]
};

export const aboutTeamData: AboutTeamProps = {
  title: "Our Team",
  description: "Our diverse team brings together expertise from various fields, creating a dynamic environment where innovation thrives. We're united by our passion for technology and commitment to delivering exceptional results.",
  teamMembers: [
    {
      initials: "JD",
      name: "John Doe",
      role: "Chief Executive Officer",
      position: "Chief Executive Officer",
      avatarColor: "primary.main"
    },
    {
      initials: "JS",
      name: "Jane Smith",
      role: "Chief Technology Officer",
      position: "Chief Technology Officer",
      avatarColor: "secondary.main"
    },
    {
      initials: "MJ",
      name: "Mike Johnson",
      role: "Head of Product",
      position: "Head of Product",
      avatarColor: "success.main"
    }
  ]
};

export const mockData = {
  teamMembers: aboutTeamData.teamMembers,
  values: aboutValuesData.values,
};
