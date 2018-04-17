import React from "react";
import styled, { css, } from "styled-components";

import DropdownLinks from "./DropdownLinks";

import {
	bp,
	bpEither,
	clearfix,
	shadow,
	transparent,
	xs,
} from "codogo-utility-functions";

// --------------------------------------------------

const linksStyle = [
	css`
		align-items: center;
		background: ${ props => props.backgroundColor.xs };
		left: 0;
		position: absolute;
		right: 0;
		top: ${ props => props.topOffset.xs };
		transform: translateY(${ props => (props.open ? 0 : -150) }%);
		transition: 0.3s all ease-out;
		${ shadow(2) };
	`,
	css`
		justify-self: flex-end;
		display: flex;
		align-items: center;
		order: 2;
	`,
];

const LinksWrapper = styled.div`
	${ xs`${ linksStyle[0] }` };
	${ bp.sm.min`${ linksStyle[1] }` };
`;

const linkStyle = [
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

		> a {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 0 ${ props => props.padding.other };

			${ props => props.underlineColor && "height: 100%" };

			&.active {
				padding-top: ${ props => props.underlineColor && "3px" };
				border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
			}
		}

		&:hover {
			> a {
				padding-top: ${ props => props.underlineColor && "3px" };
				text-decoration: ${ props => !props.underlineColor && "underline" };
				border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
			}
		}
	`,
];

const LinkWrapper = styled.div`
	${ props => bpEither("text-transform", props.textTransform) };
	${ props => bpEither("font-size", props.fontSize) };
	font-family: ${ props => props.font };

	${ xs`${ linkStyle[0] }` };
	${ bp.sm.min`${ linkStyle[1] }` };

	> a {
		white-space: nowrap;
		${ clearfix.link };
		${ props => bpEither("color", props.color) };
		
		&.active {
			${ props => bpEither("color", props.highlightColor) };
			font-weight: bold;
		}
	}

	&:hover {
		.navlink-dropdown {
			display: flex;
		}
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

const Links = props => (
	<LinksWrapper
		open = { props.open }
		backgroundColor = { props.backgroundColor }
		fontSize = { props.fontSize }
		font = { props.font }
		topOffset = { props.topOffset }
	>
		{props.children.map((navlink, i) => {
			return navlink.notLink === true ? (
				<div 
					key = { "navlink" + i }
					onclick = { props.close }
				>
					{ navlink }
				</div>
			) : (
				<LinkWrapper 
					key = { "navlink" + i }
					onclick = { props.close } 
					{ ...props }
				>
					{ navlink}
	  			
	  				{ navlink.props.dropdown && 
	  					<DropdownInput type = "checkbox" name = "one" id = { "item-" + i } defaultChecked = { true }/> }

	  				{ navlink.props.dropdown && <DropdownArrow htmlFor = { "item-" + i }>▼</DropdownArrow> }

					{ 
						navlink.props.dropdown && 
						<DropdownLinks 
							close = { props.close }
							dropdown = { navlink.props.dropdown } 
							underlineColor = { props.underlineColor }
							padding = { props.padding }
							highlightColor = { props.highlightColor }
							color = { props.color }
							height = { props.height }
							onClick = { props.close }
							clear = { props.clear }
						/> 
					}
				</LinkWrapper>
			);
		})}
	</LinksWrapper>
);

export default Links;
