import React, { Component, } from "react";
import styled, { css, } from "styled-components";
import { Link as _RouterLink, NavLink as _RouterNavLink, } from "react-router-dom";
import {
	bp,
	bpEither,
	xs,
	clearfix,
} from "codogo-utility-functions";

import _GatsbyLink from "gatsby-link";
import PropTypes from "prop-types";


// --------------------------------------------------

const linkStyle = [
	css`
		font-size: 1em;
	`,
	css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0.5em ${ props => props.padding.other };
		color: ${ props => props.color.other };

		${ props => props.underlineColor && "height: 100%" };

		${ props => props.border && `
			border: 2px solid white;
    		border-radius: 3px;
    		margin: 0.5em;
		` };

		&.active {
			color: ${ props => props.highlightColor.other };
			border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
			border-top: 3px solid transparent;
		}

		&:hover {
			text-decoration: ${ props => !props.underlineColor && "underline" };
			border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
			border-top: 3px solid transparent;
		}
	`,
];

const StyledLink = styled.a`
	${ xs`${ linkStyle[0] }` };
	${ bp.sm.min`${ linkStyle[1] }` };

	white-space: nowrap;
	${ clearfix.link };
	${ props => bpEither("color", props.color) };
	
	&.active {
		${ props => bpEither("color", props.highlightColor) };
		font-weight: bold;
	}

	&:hover {
		${ props => bpEither("color", props.highlightColor) };
	}
`;

const GatsbyLink = StyledLink.withComponent(_GatsbyLink);
const RouterLink = StyledLink.withComponent(_RouterLink);
const RouterNavLink = StyledLink.withComponent(_RouterNavLink);
const DivLink = StyledLink.withComponent("div");

const LinkOptions = {
	"a": StyledLink,
	"gatsby-link": GatsbyLink,
	"link": RouterLink,
	"nav-link": RouterNavLink,
	"div": DivLink,
};

// --------------------------------------------------

class Link extends Component {
	render() {
		const {
			border,
			close,
			theme,
			to,
		} = this.props;

		var VariousLink = LinkOptions[this.props.as];

		return (
			<VariousLink
				to = { to }
				href = { to }
				onClick = { close }
				underlineColor = { theme.underlineColor }
				padding = { theme.padding }
				color = { theme.color }
				highlightColor = { theme.highlightColor }
				border = { border }
			>
				{ this.props.children }
			</VariousLink>
		);
	}
}

Link.propTypes = {
	as: PropTypes.object,
	border: PropTypes.any,
	children: PropTypes.any,
	close: PropTypes.any,
	links: PropTypes.object,
	theme: PropTypes.object,
	to: PropTypes.object,
};

export default Link;