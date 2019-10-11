# new.jupyter.github.io
This is the playground for the new Jupyter.org.

Here is a link to the style guide. We will build components based on this.
https://www.figma.com/file/PQD2GrejGoeZdYGhXthnAuEs/jupyter_master?node-id=700%3A2322

## Contributing

We use TypeScript and React in this project.

When developing: `npm run dev` to see it in action!

For production: `npm run build` will generate production-ready HTML in `dist/`.

You can use [`generact`](https://github.com/diegohaz/generact) to make copies of existing React components.

We use ESLint, make sure to `npm run lint-fix` your code.

There is an ESLint VSCode plugin to show lint errors in the text editor. Make sure to add this to your `settings.json`:
```json
{
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ]
}
```
