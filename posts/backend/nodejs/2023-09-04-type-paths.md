---
title: typescript paths + eslint
category: nodejs
tags:
  - nodejs
  - typescript
date: 2023-09-04
---

#### require

- eslit-import-resolver-typescript

```bash
$ yarn add -D eslint-import-resolver-typescript
```

**tsconfig.json**

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**eslint.json**

```json
{
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"]
  },
  "import/resolver": {
    "typescript": {}
  }
}
```
