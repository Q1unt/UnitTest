module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            
            "files": ["**/*/*.test.js"],
            "pludins": ["jest"],
            "extends": ["plugin:jest/recommended"],
            "rules": { "jest/prefer-expect-assertions":  "off" }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {}
}
