# codogo-nav

## Example usage

Import component

```
    import { Nav, } from "codogo-nav";
```

A simple example:

```
    <Nav
        logo = { <Logo src = { akkrooLogo } /> }
        links = { [
            {
                as: "gatsby-link",
                to: "/",
                content: "Home",
            },
            {
                as: "a",
                to: "/form-stage-1/",
                content: "Stage 1",
            },
            {
                as: "router-link",
                to: "/form-stage-2/",
                content: "Stage 2",
            },
        ] }
    />
```

## Links

`codogo-nav` links support the following components, selected via the "as" property via the following strings:

- `<a/>` - "a"
- "gatsby-link" - "gatsby-link"
- `<Link/>` from "react-router-dom" - "link"
- `<NavLink/>` from "react-router-dom" - "nav-link"
- `<div/>` - "div"

## Props

The follow props are used, defaults shown below:

```
const theme = {
    padding: {
        //
        xs: "0.75em",
        other: "1.5em",
    },
    color: {
        // Font color
        xs: "#fff",
        other: "#333",
    },
    highlightColor: {
        // Hover on links, burger menu
        xs: "#ddd",
        other: "#888",
    },
    backgroundColor: {
        xs: "#333",
        other: "#fff",
    },
    height: {
        xs: "50px",
        other: "70px",
    },
    font: "sans-serif",
    fontSize: {
        xs: "0.8em",
        other: "1.1em",
    },
    textTransform: {
        xs: "none",
        other: "none",
    },
    topOffset: {
        xs: "50px",
        other: "70px",
    },
    margin: {
        xs: "20px",
        other: "30px",
    },
    clear: false,
    fixed: false,
    shadow: false,
};
```


## More complex examples

```


```