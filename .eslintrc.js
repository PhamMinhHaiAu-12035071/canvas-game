module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": ["prettier"],
    "extends": ["plugin:prettier/recommended"],
    "rules": {
        "prettier/prettier": "error"
    }
}
