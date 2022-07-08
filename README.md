# Module Federation Shared Library Prototype

- Storybook
- Typescript
- Jest

## Getting type definitions

Type definitions are served from `${baseUrl}/types.txt`. To get up-to-date type definitions into your project, run this from the root of your project:

```
curl http://localhost:8080/types.txt > shared.d.ts
```
