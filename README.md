# codogo-nav

## Example usage

Import component

```
import { Nav, } from 'codogo-nav';
```

Use like this:

```
    <Nav
        logo = { <Logo src = "/img/igpf-logo.png" /> }
        font = "Helvetica"
        textTransform = { { "xs": "capitalize", "other": "capitalize", } }
        backgroundColor = { { "xs": vars.colors.gray, "other": vars.colors.gray, } }
        color = { { "xs": vars.colors.primary, "other": vars.colors.primary, } }
        shadow
    >
        {
            nav.map(
                (route, i) => (
                    <MenuLink
                        key = { route.title }
                        to = { route.link || route.path }
                        activeClassName = "active"
                        onClick = { props.close }
                    >
                        { route.title }
                    </MenuLink>
                )
            )
        }
    </Nav>
```

## Props

The follow props are used, defaults shown below:

```
Nav.defaultProps = {
    padding: {
        xs: "15px",
        other: "20px",
    },
    color: {
        xs: "#fff",
        other: "#fff",
    },
    backgroundColor: {
        xs: "#333",
        other: "#333",
    },
    height: {
        xs: "50px",
        other: "70px",
    },
    font: "sans-serif",
    textTransform: {
        xs: "uppercase",
        other: "uppercase",
    },
    topOffset: {
        xs: "50px",
        other: "70px",
    },
    margin: {
        xs: "20px",
        other: "30px",
    },
};
```