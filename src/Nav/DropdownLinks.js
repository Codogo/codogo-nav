import React from "react";
import styled, { css, } from "styled-components";

import {
	bp,
	bpEither,
	clearfix,
	shadow,
	transparent,
	xs,
} from "codogo-utility-functions";

// --------------------------------------------------

const dropdownStyle = [
	css`
		background: none;
		flex-direction: column;
		display: flex;

		
		width: 50%;
		max-height: 99em;
		opacity: 1;
		height: auto;
		overflow: hidden;
		transition: opacity .5s linear, max-height .5s linear;
	
		p {
			padding: 10px;
			margin: 0;
		}

		> a {
			color: #fff;
		}

		> div {
			display: flex;
			flex-direction: column;

			> a {
				color: white;
				padding: 0.5em 1em;
				opacity: 0.8;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	`,
	css`
		background: white;
		border-radius: 3px;
		display: none;
		flex-direction: column;
		margin-top: 0.5em;
		position: absolute;
		${ shadow(2) };

		top: 5em;
		${ props => props.height && `top: ${ props.height }` };

		> a {
			color: #333;
		}


		> div {
			display: flex;
			flex-direction: column;

			> a {
				color: black;
				padding: 0.5em 1em;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	`,
];

const Dropdown = styled.div`
	${ xs`${ dropdownStyle[0] }` };
	${ bp.sm.min`${ dropdownStyle[1] }` };
`;

const linkStyle = [
	css`
		display: block;
		padding: ${ props => props.padding.xs };
		border-bottom: 1px solid ${ transparent(0.1) };
		color: ${ props => props.highlightColor.xs };
	`,
	css`
		letter-spacing: 0.1em;
		color: ${ props => props.highlightColor.other };
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

const DropdownLink = styled.div`
	${ props => bpEither("text-transform", props.textTransform) };
	${ props => bpEither("font-size", props.fontSize) };
	font-family: ${ props => props.font } a {
		${ clearfix.link };
		${ props => bpEither("color", props.color) };
	}

	> .active {
		font-weight: bold;
	}

	${ xs`${ linkStyle[0] }` };
	${ bp.sm.min`${ linkStyle[1] }` };
`;

// --------------------------------------------------

const DropdownLinks = props => (
	<Dropdown
		className = "navlink-dropdown"
		height = { props.height }
	>
		{ props.dropdown }
		{/*navlink.props.dropdown.map((dropdownLink, i) => (
			<DropdownLink key = { `${ dropdownLink }-${ i }` }>
				{dropdownLink}
			</DropdownLink>
		))*/}
	</Dropdown>
);

export default DropdownLinks;
