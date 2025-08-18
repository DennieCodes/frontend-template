const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
  // TEMPLATE NOTE: Coverage thresholds are set to 0% for template purposes.
  // When implementing your actual project, update these to your desired levels
  // (typically 80% or higher for production applications).
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

module.exports = config;
