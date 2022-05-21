module.exports = {
  preset: "ts-jest",
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  coverageDirectory: ".coverage",
  testPathIgnorePatterns: ["/node_modules/", "dist", "d.ts", '.history'],
};
