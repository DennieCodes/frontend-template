import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define translation resources type
interface TranslationResources {
  [key: string]: {
    translation: Record<string, any>;
  };
}

// Define translations inline to avoid JSON import issues
const enTranslation = {
  "common": {
    "home": "Home",
    "account": "Account",
    "settings": "Settings",
    "profile": "Profile",
    "security": "Security",
    "subscription": "Subscription",
    "address": "Address",
    "save": "Save",
    "cancel": "Cancel",
    "edit": "Edit",
    "delete": "Delete",
    "loading": "Loading...",
    "error": "Error",
    "success": "Success",
    "warning": "Warning",
    "info": "Information",
    "brand": "Frontend Template",
    "navigation": "Navigation",
    "welcome": "Welcome",
    "user": "User",
    "logout": "Logout",
    "back": "Back",
    "next": "Next"
  },
  "navigation": {
    "dashboard": "Dashboard",
    "articles": "Articles",
    "resources": "Resources",
    "products": "Products",
    "events": "Events",
    "quiz": "Quiz",
    "survey": "Survey",
    "search": "Search",
    "about": "About",
    "contact": "Contact",
    "faq": "FAQ",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "sitemap": "Site Map",
    "content": "Content"
  },
  "account": {
    "title": "Account Settings",
    "subtitle": "Manage your profile, security, and subscription preferences",
    "profileInfo": "Profile Information",
    "addressInfo": "Address Information",
    "subscriptionPlan": "Subscription Plan",
    "securitySettings": "Security Settings",
    "accountSummary": "Account Summary",
    "activeProjects": "Active Projects",
    "completedTasks": "Completed Tasks",
    "teamMembers": "Team Members",
    "profileComplete": "Profile Complete"
  },
  "language": {
    "en": "English",
    "es": "Spanish",
    "switchLanguage": "Switch Language",
    "currentLanguage": "Current Language"
  },
  "forms": {
    "firstName": "First Name",
    "lastName": "Last Name",
    "email": "Email",
    "phone": "Phone",
    "password": "Password",
    "confirmPassword": "Confirm Password",
    "street": "Street Address",
    "city": "City",
    "state": "State",
    "zipCode": "ZIP Code",
    "country": "Country"
  },
  "validation": {
    "required": "This field is required",
    "invalidEmail": "Please enter a valid email address",
    "passwordMismatch": "Passwords do not match",
    "minLength": "Must be at least {{min}} characters",
    "maxLength": "Must be no more than {{max}} characters"
  },
  "pages": {
    "home": {
      "title": "Welcome to Our Platform",
      "subtitle": "Discover amazing features and resources"
    },
    "about": {
      "title": "About Us",
      "subtitle": "Learn more about our mission and values"
    },
    "contact": {
      "title": "Contact Us",
      "subtitle": "Get in touch with our team"
    },
    "login": {
      "title": "Sign In",
      "subtitle": "Access your account"
    },
    "register": {
      "title": "Create Account",
      "subtitle": "Join our community"
    },
    "quiz": {
      "title": "Developer Assessment Quiz",
      "subtitle": "Please answer the following questions to help us understand your background and preferences.",
      "progress": "Step {{current}} of {{total}}",
      "submit": "Submit Quiz"
    },
    "survey": {
      "title": "User Feedback Survey",
      "subtitle": "Please take a moment to share your thoughts and help us improve our platform."
    },
    "products": {
      "title": "Our Products",
      "subtitle": "Discover our amazing collection of high-quality products"
    },
    "events": {
      "title": "Events",
      "subtitle": "Discover amazing events happening near you"
    }
  }
};

const esTranslation = {
  "common": {
    "home": "Inicio",
    "account": "Cuenta",
    "settings": "Configuración",
    "profile": "Perfil",
    "security": "Seguridad",
    "subscription": "Suscripción",
    "address": "Dirección",
    "save": "Guardar",
    "cancel": "Cancelar",
    "edit": "Editar",
    "delete": "Eliminar",
    "loading": "Cargando...",
    "error": "Error",
    "success": "Éxito",
    "warning": "Advertencia",
    "info": "Información",
    "brand": "Plantilla Frontend",
    "navigation": "Navegación",
    "welcome": "Bienvenido",
    "user": "Usuario",
    "logout": "Cerrar Sesión",
    "back": "Atrás",
    "next": "Siguiente"
  },
  "navigation": {
    "dashboard": "Panel de Control",
    "articles": "Artículos",
    "resources": "Recursos",
    "products": "Productos",
    "events": "Eventos",
    "quiz": "Cuestionario",
    "survey": "Encuesta",
    "search": "Buscar",
    "about": "Acerca de",
    "contact": "Contacto",
    "faq": "Preguntas Frecuentes",
    "privacy": "Política de Privacidad",
    "terms": "Términos de Servicio",
    "sitemap": "Mapa del Sitio",
    "content": "Contenido"
  },
  "account": {
    "title": "Configuración de Cuenta",
    "subtitle": "Gestiona tu perfil, seguridad y preferencias de suscripción",
    "profileInfo": "Información del Perfil",
    "addressInfo": "Información de Dirección",
    "subscriptionPlan": "Plan de Suscripción",
    "securitySettings": "Configuración de Seguridad",
    "accountSummary": "Resumen de Cuenta",
    "activeProjects": "Proyectos Activos",
    "completedTasks": "Tareas Completadas",
    "teamMembers": "Miembros del Equipo",
    "profileComplete": "Perfil Completo"
  },
  "language": {
    "en": "Inglés",
    "es": "Español",
    "switchLanguage": "Cambiar Idioma",
    "currentLanguage": "Idioma Actual"
  },
  "forms": {
    "firstName": "Nombre",
    "lastName": "Apellido",
    "email": "Correo Electrónico",
    "phone": "Teléfono",
    "password": "Contraseña",
    "confirmPassword": "Confirmar Contraseña",
    "street": "Dirección",
    "city": "Ciudad",
    "state": "Estado",
    "zipCode": "Código Postal",
    "country": "País"
  },
  "validation": {
    "required": "Este campo es obligatorio",
    "invalidEmail": "Por favor ingrese un correo electrónico válido",
    "passwordMismatch": "Las contraseñas no coinciden",
    "minLength": "Debe tener al menos {{min}} caracteres",
    "maxLength": "No debe tener más de {{max}} caracteres"
  },
  "pages": {
    "home": {
      "title": "Bienvenido a Nuestra Plataforma",
      "subtitle": "Descubre características y recursos increíbles"
    },
    "about": {
      "title": "Acerca de Nosotros",
      "subtitle": "Conoce más sobre nuestra misión y valores"
    },
    "contact": {
      "title": "Contáctanos",
      "subtitle": "Ponte en contacto con nuestro equipo"
    },
    "login": {
      "title": "Iniciar Sesión",
      "subtitle": "Accede a tu cuenta"
    },
    "register": {
      "title": "Crear Cuenta",
      "subtitle": "Únete a nuestra comunidad"
    },
    "quiz": {
      "title": "Cuestionario de Evaluación de Desarrollador",
      "subtitle": "Por favor responde las siguientes preguntas para ayudarnos a entender tu experiencia y preferencias.",
      "progress": "Paso {{current}} de {{total}}",
      "submit": "Enviar Cuestionario"
    },
    "survey": {
      "title": "Encuesta de Opinión de Usuario",
      "subtitle": "Por favor toma un momento para compartir tus pensamientos y ayudarnos a mejorar nuestra plataforma."
    },
    "products": {
      "title": "Nuestros Productos",
      "subtitle": "Descubre nuestra increíble colección de productos de alta calidad"
    },
    "events": {
      "title": "Eventos",
      "subtitle": "Descubre eventos increíbles que suceden cerca de ti"
    }
  }
};

const resources: TranslationResources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: import.meta.env.DEV,

    // Interpolation options
    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    // Missing key handling
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      if (import.meta.env.DEV) {
        console.warn(`Missing translation key: ${key} for language: ${lng}`);
      }
      return fallbackValue || key;
    },
  });

export default i18n;