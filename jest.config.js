module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1",
    "^@src/(.*)": "<rootDir>/src/$1",
    "^@app/(.*)": "<rootDir>/src/app/$1",
    "^@env/(.*)": "<rootDir>/src/environments/$1",
    "^@shared/(.*)": "<rootDir>/src/app/shared/$1",
  },
};
