const config = {
  collectCoverageFrom: ['config/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
  moduleNameMapper: {
    '^@@EpicType': '<rootDir>/src/models/EpicType.ts',
    '^@@LocalizationDictionary': '<rootDir>/src/models/LocalizationDictionary.ts',
    '^@@RootAction': '<rootDir>/src/models/RootAction.ts',
    '^@@RootState': '<rootDir>/src/models/RootState.ts',
    '^@App': '<rootDir>/src/App/index.ts',
    '^@Routes': '<rootDir>/src/Routes/index.ts',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@localization': '<rootDir>/src/localization',
    '^@localization/(.*)$': '<rootDir>/src/localization/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@resources/(.*)$': '<rootDir>/src/resources/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@storeData/(.*)$': '<rootDir>/src/store/data/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  modulePaths: [],
  roots: ['<rootDir>/src', '<rootDir>/config'],
  testMatch: [
    '**/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/*.{spec,test}.{js,jsx,ts,tsx}',
    '**/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};

module.exports = config;
