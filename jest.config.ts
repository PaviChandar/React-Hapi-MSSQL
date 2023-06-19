module.exports = {

    preset: 'ts-jest',
  
    // testEnvironment: 'jest-environment-jsdom',
  
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  
    roots: ['./src'],
  
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  
    modulePaths: ['./src'],
  
    moduleNameMapper: {
  
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  
    },
  
    coverageThreshold: {
  
      global: {
  
        branches: 100,
  
        functions: 100,
  
        lines: 100,
  
      }
  
    },
  
    // transform: {
  
    //   '^.+\\.(ts|tsx)$': 'ts-jest','(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  
    //   '<rootDir>/src/test/mocks/fileTransformer.js'
  
    // },
  
  }