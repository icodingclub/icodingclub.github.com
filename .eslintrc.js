module.exports = {
    "root": true,
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "impliedStrict": true,
            "globalReturn": false,
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "amd": true,
        "worker": true,
        "es6": true
    },
    "rules": {
        "space-before-function-paren": 0,
        "one-var": [0, "never"],
        "indent": 2,
        "no-unused-vars": 2,
        "no-debugger": 2,
        "key-spacing": 0,
        "no-dupe-keys": 2,
        "max-nested-callbacks": ["error", {
            "max": 4
        }],
        "no-multiple-empty-lines": 0,
        "react/jsx-indent-props": 0,
        "object-curly-spacing": 0
    }
}
