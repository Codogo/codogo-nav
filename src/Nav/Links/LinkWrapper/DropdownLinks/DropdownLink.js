import React, { Component, } from "react";
import styled, { css, } from "styled-components";
import { bp, xs, } from "codogo-utility-functions";
import { Link as _RouterLink, NavLink as _RouterNavLink, } from "react-router-dom";

import _GatsbyLink from "gatsby-link";
import PropTypes from "prop-types";

// --------------------------------------------------

const LinkStyles = [
	css`
		display: block;
		padding: ${ props => props.padding.xs };
		padding-left: 2em;
		color: ${ props => props.color.xs };
		padding: 0.5em 1em;
		opacity: 0.8;

		&:hover {
			color: ${ props => props.color.xs };
			text-decoration: underline;
		}
	`,
	css`
		align-items: center;
		color: black;
		display: flex;
		flex-direction: row;
		height: 100%;
		letter-spacing: 0.1em;
		padding: 0.5em ${ props => props.padding.other };

		justify-content: left;
		${ props => props.clear && "justify-content: center;" };

		${ props => props.underlineColor && "height: 100%" };

		&.active {
			color: black;
			padding-top: ${ props => props.underlineColor && "3px" };
			border-bottom: ${ props =>
		props.underlineColor && `3px solid ${ props.underlineColor }` };
		}

		&:hover {
			color: black;
			text-decoration: underline;
			padding-top: ${ props => props.underlineColor && "3px" };
			text-decoration: ${ props => !props.underlineColor && "underline" };
			border-bottom: ${ props =>
		props.underlineColor && `3px solid ${ props.underlineColor }` };
		}
	`,
];

const StyledLink = styled.a`
	${ xs`${ LinkStyles[0] }` };
	${ bp.sm.min`${ LinkStyles[1] }` };
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

class DropdownLink extends Component {
	render() {
		const { to, close, theme, content, } = this.props;

		var VariousLink = LinkOptions[this.props.as];

		return (
			<VariousLink
				to = { to }
				href = { to }
				onClick = { close }
				underlineColor = { theme.underlineColor }
				padding = { theme.padding }
				color = { theme.color }
				clear = { theme.clear }
			>
				{ content }
			</VariousLink>
		);
	}
}

DropdownLink.propTypes = {
	as: PropTypes.object,
	close: PropTypes.any,
	content: PropTypes.object,
	theme: PropTypes.object,
	to: PropTypes.any,
};

export default DropdownLink;
