// ZaniQ IWMS v2.0 - Configuration

const CONFIG = {
  // API Configuration
  API_URL: window.location.hostname === 'localhost'
    ? 'http://localhost:3000/api'
    : 'https://zaniq-api.ondigitalocean.app/api',

  // Feature Flags
  FEATURES: {
    ENABLE_REAL_TIME: false, // WebSocket updates
    ENABLE_OFFLINE: true,    // PWA offline mode
    ENABLE_ANALYTICS: true,  // Page tracking
    ENABLE_AUTH: false,       // Authentication (demo mode)
  },

  // App Metadata
  APP: {
    NAME: 'ZaniQ IWMS',
    VERSION: '2.0.0',
    BUILD_DATE: '2026-07-22',
    SUPPORT_EMAIL: 'pitsephali@gmail.com',
  },

  // Page Titles
  PAGES: {
    dash: ['Estate Dashboard', 'Live overview · three campuses'],
    maint: ['Maintenance', 'Work orders, assets and contractor dispatch'],
    res: ['Residences', 'Student housing lifecycle and NSFAS reconciliation'],
    energy: ['Energy & Water', 'Load-shedding readiness, generation and bulk water'],
    space: ['Space & Bookings', 'Utilisation, booking and HEMIS returns'],
    safety: ['Safety & Compliance', 'OHS Act registers, incidents and POPIA'],
    vendors: ['Vendors & B-BBEE', 'CSD-verified suppliers and preferential procurement'],
  },

  // Default Client Info
  CLIENT: {
    name: 'Example University',
    desc: 'Demonstration tenant<br>Three campuses · sample estate',
  },

  // Load-shedding stages (South Africa specific)
  LOAD_SHEDDING: {
    STAGE_1: { hours: 2.5, color: '#f5eacd' },
    STAGE_2: { hours: 4, color: '#f7ddd6' },
    STAGE_3: { hours: 6, color: '#f7ccc6' },
    STAGE_4: { hours: 8, color: '#f7bbb6' },
  },

  // Chart Colors
  COLORS: {
    primary: '#C4472A',
    secondary: '#1E7263',
    accent: '#C08F2E',
    success: '#1E7263',
    warning: '#C08F2E',
    danger: '#C4472A',
    info: '#5E6C71',
    gray: '#DCD4C3',
  },

  // Animation Durations (ms)
  ANIMATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },

  // Local Storage Keys
  STORAGE_KEYS: {
    THEME: 'zaniq_theme',
    USER_PREFS: 'zaniq_user_prefs',
    OFFLINE_DATA: 'zaniq_offline_data',
  },
};

// Freeze config to prevent modifications
Object.freeze(CONFIG);
Object.freeze(CONFIG.FEATURES);
Object.freeze(CONFIG.APP);
Object.freeze(CONFIG.PAGES);
Object.freeze(CONFIG.CLIENT);
Object.freeze(CONFIG.LOAD_SHEDDING);
Object.freeze(CONFIG.COLORS);
Object.freeze(CONFIG.ANIMATION);
Object.freeze(CONFIG.STORAGE_KEYS);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
