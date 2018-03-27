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
	`,
	css`
		letter-spacing: 0.1em;
		color: ${ props => props.color.other };
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		a {
			display: flex;
			height: 100%;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 0 ${ props => props.padding.other };

			&.active {
				padding-top: 3px;
				border-bottom: ${ props => props.underlineColor && `3px solid ${ props.underlineColor }` };
			}
		}

		&:hover {
			a {
				padding-top: 3px;
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

	a {
		${ clearfix.link };
		
		&.active {
			${ props => bpEither("color", props.color) };
			font-weight: bold;
		}
	}
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
		{
			props.children.map((navlink, i) => {
				return navlink.notLink === true ? (
					<div key = { "navlink" + i }>{navlink}</div>
				) : (
					<LinkWrapper key = { "navlink" + i } underlineColor = "red" { ...props }>
						{ navlink }
					</LinkWrapper>
				);
			})
		}
	</LinksWrapper>
);

export default Links;
