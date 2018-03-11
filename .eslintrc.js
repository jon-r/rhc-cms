module.exports = {
    "extends": [
      'eslint:recommended',
      'plugin:vue/essential'
    ],
    "env": {
      "node": true,
    },
    "plugins": [
      "import",
      "async-await"
    ],
    "parserOptions": {
      "ecmaVersion": 2017
    },

    // custom rules
    "rules": {
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always", { "omitLastInOneLineBlock": true}],

      // override default options for rules from base configurations
      "comma-dangle": ["error", "always-multiline"],
      "no-cond-assign": ["error", "always"],

      // disable rules from base configurations
      "no-console": "off",
    }
};
