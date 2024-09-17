module.exports = {
  displayName: "svelte-app",
  transform: {
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  // setupFilesAfterEnv: ["<rootDir>/src/setup-jest.js"],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/$1",
  },
};
