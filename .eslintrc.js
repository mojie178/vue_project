module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "vue/setup-compiler-macros": true
  },
  "parser": "vue-eslint-parser",
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential"
  ],
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
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-console": import.meta.env.MODE === "production" ? "error" : "off",
    "no-debugger": import.meta.env.MODE === "production" ? "error" : "off",
    "space-before-function-paren": 0, // 函数参数前意外空格
    "no-multi-spaces": "error", // 禁止出现多个空格
    "require-await": "error", // 禁止出现无await的async表达式
    "indent": ["error", 2], // 统一2格缩进
  }
}
