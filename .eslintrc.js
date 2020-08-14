const RULES = {
  OFF: "off",
  ON: "on",
  WARN: "warn"
};

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": RULES.OFF,
    "react/prop-types": RULES.OFF
  }
};
