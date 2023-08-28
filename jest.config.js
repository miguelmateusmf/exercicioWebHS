module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+.(js|jsx|ts|tsx|mjs)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["/node_modules/", "^.+.module.(css|sass|scss)$"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
