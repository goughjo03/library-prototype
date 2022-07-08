# Module Federation Shared Library Prototype

This repo provides basic config for the following:

- Storybook 
- Providing type definitions that can be used by hosts
- Jest (unit testing)

Tools:

- This project uses [pnpm](https://pnpm.io) as a node package manager
- This project uses [asdf](https://asdf-vm.com) to manage software versions, e.g. node version

## Getting type definitions

Type definitions are served from `${baseUrl}/types.txt`. To get up-to-date type definitions into your project, run this from the root of your project:

```
curl http://localhost:8080/types.txt > shared.d.ts
```

## Storybook

To see examples and documentation [see here](https://goughjo03.github.io/library-prototype/?path=/story/button--basic-button).
