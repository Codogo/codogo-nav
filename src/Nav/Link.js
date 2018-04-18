import React, { Component, } from "react";
import styled, { css, } from "styled-components";

import DropdownLinks from "./DropdownLinks";

import {
	bp,
	bpEither,
	xs,
	shadow,
	transparent,
	clearfix,
} from "codogo-utility-functions";

// --------------------------------------------------

const linkWrapperStyle = [
	css`
		display: block;
		padding: ${ props => props.padding.xs };
		border-bottom: 1px solid ${ transparent(0.1) };
		color: ${ props => props.color.xs };

		input[type="checkbox"]:checked ~ div {
			opacity: 0;
			max-height: 0;
			border: none;
		}

		input[type="checkbox"]:not(:checked) ~ div {
			margin-top: 10px;
		}

		input[type="checkbox"]:not(:checked) + label {
			transform: rotate(180deg);
		}
	`,
	css`
		letter-spacing: 0.1em;
		color: ${ props => props.color.other };
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
];

const LinkWrapper = styled.div`
	${ props => console.log(props) }
	${ props => bpEither("text-transform", props.textTransform) };
	${ props => bpEither("font-size", props.fontSize) };
	font-family: ${ props => props.font };

	${ xs`${ linkWrapperStyle[0] }` };
	${ bp.sm.min`${ linkWrapperStyle[1] }` };

	&:hover {
		.navlink-dropdown {
			display: flex;
		}
	}
`;

const linkStyle = [
	css`
		color: ${ props => props.color.xs };
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
		`};

		&.active {
			color: ${ props => props.highlightColor.other };
			padding-top: ${ props => props.underlineColor && "3px" };
			border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
		}

		&:hover {
			color: ${ props => props.color.other };
			padding-top: ${ props => props.underlineColor && "3px" };
			text-decoration: ${ props => !props.underlineColor && "underline" };
			border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
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
`;

const DropdownArrow = styled.label`
	font-size: 0.8em;
	position: absolute;
	right: 1em;
	cursor: pointer;
	${ bp.sm.min`display: none;` };
`;

const DropdownInput = styled.input`
	position: absolute;
	left: -999em;
	${ bp.sm.min`display: none;` };
`;

// --------------------------------------------------

class Link extends Component {

	render() {
		const {
			to,
			close,
			dropdown,
			theme,
			i,
			border,
		} = this.props;

		const Link = StyledLink.withComponent(this.props.as || "a");

		return (
			<LinkWrapper
				padding = { theme.padding }
				color = { theme.color }
				textTransform = { theme.textTransform }
				font = { theme.font }
				fontSize = { theme.fontSize }
			>
				<Link 
					to = { to } 
					href = { to }
					onClick = { close }
					underlineColor = { theme.underlineColor }
					padding = { theme.padding }
					color = { theme.color }
					highlightColor = { theme.highlightColor }
					border = { border }
				>
					{ this.props.content }
				</Link>
			
				{ dropdown && <DropdownInput type = "checkbox" name = "one" id = { "item-" + i } defaultChecked = { true }/> }

				{ dropdown && <DropdownArrow htmlFor = { "item-" + i }>▼</DropdownArrow> }

				{ 
					dropdown && 
					<DropdownLinks 
						close = { close }
						dropdown = { dropdown } 
						theme = { theme }
					/> 
				}
			</LinkWrapper>
		)
	}
}

export default Link;
