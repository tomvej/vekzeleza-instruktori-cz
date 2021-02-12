module.exports = {
    env: {
        browser: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsConfigRoot: __dirname,
        project: "./tsconfig.json",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "import"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript"
    ],
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "import/order": ["error", { "newlines-between": "always", "alphabetize": { "order": "asc" } }]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
}
