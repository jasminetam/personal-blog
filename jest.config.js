module.exports = {
  setupFilesAfterEnv: ['<rootDir>/__test__/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {},

  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/__test__/CSSconfig.js',
    'public-ip': '<rootDir>/__test__/PublicIPconfig.js',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/empty.js',
  },
  rootDir: './',
};
