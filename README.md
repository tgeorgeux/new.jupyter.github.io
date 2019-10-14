# new.jupyter.github.io
This is the playground for the new Jupyter.org.

Here is a link to the style guide. We will build components based on this.
https://www.figma.com/file/PQD2GrejGoeZdYGhXthnAuEs/jupyter_master?node-id=700%3A2322

## Contributing
1. We use TypeScript and React in this project.
2. When developing: `npm run dev` to see it in action!
3. For production: `npm run build` will generate production-ready HTML in `dist/`.
4. We use ESLint, make sure to `npm run lint-fix` your code.

### Tools
1. You can use [`generact`](https://github.com/diegohaz/generact) to make copies of existing React components.
2. You can use the [React Developer Tools Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to probe individual React components of the site.
3. There is an ESLint VSCode plugin to show lint errors in the text editor. Make sure to add this to your `settings.json`:
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
