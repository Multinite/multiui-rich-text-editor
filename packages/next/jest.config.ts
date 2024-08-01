module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "vue",
    "svelte",
    "html",
  ],
  coverageDirectory: "./coverage",
  collectCoverageFrom: [
    "apps/**/*.{js,jsx,ts,tsx,vue,svelte}",
    "components/**/*.{js,jsx,ts,tsx,vue,svelte}",
    "!**/node_modules/**",
    "!**/dist/**",
  ],
};
