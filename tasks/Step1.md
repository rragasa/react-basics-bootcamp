# Step 1: The Header

Repository URI:
`https://github.com/Jonur/react-basics-bootcamp`

1. Fork the repository to your account. Clone it and switch to the `starter` branch.
2. Create a new branch off of `starter` titled `rbb-[name]`; replace `[name]` with your first name.
3. Create a new sub-directory titled `components` under the `/src` directory.
4. Create a new React stateless component called `Navbar` (`Navbar.js`) in the `components` directory, which only returns the following static JSX template:

```
<nav className="navbar navbar-light">
    <span className="navbar-brand mb-0 h1">Secret Santa App</span>
</nav>
```

5. Include the `Navbar` component and include it inside the `.secret-santa-app` of the main `App` component.