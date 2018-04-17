import React, { Component, } from "react";
import styled, { css, } from "styled-components";

import {
	bp,
	shadow,
	transparent,
	xs,
} from "codogo-utility-functions";

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
		${ props => props.clear && `justify-content: center;` };

		${ props => props.underlineColor && "height: 100%" };

		&.active {
			color: black;
			padding-top: ${ props => props.underlineColor && "3px" };
			border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
		}

		&:hover {
			color: black;
			text-decoration: underline;
			padding-top: ${ props => props.underlineColor && "3px" };
			text-decoration: ${ props => !props.underlineColor && "underline" };
			border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
		}
	`,
];

// --------------------------------------------------

class DropdownLink extends Component {

	render() {
		const Link = this.props.as || "a";

		const StyledLink = styled(Link)`
			${ xs`${ LinkStyles[0] }` };
			${ bp.sm.min`${ LinkStyles[1] }` };
		`;

		return (
			<StyledLink 
				to = { this.props.to } 
				href = { this.props.to }
				underlineColor = { this.props.underlineColor }
				padding = { this.props.padding }
				color = { this.props.color }
				onclick = { this.props.close }
				clear = { this.props.clear }
			>
				{ this.props.content }
			</StyledLink>
		)
	}
}

export default DropdownLink;
