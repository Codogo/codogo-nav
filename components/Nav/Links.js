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
		transform: translateY(${ props => ( props.open ? 0 : -150 ) }%);
		transition: 0.3s all ease-out;
		${ shadow(2) };
	`,
	css`
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
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
		line-height: ${ props => props.height.other };
		padding: 0 ${ props => props.padding.other };
		letter-spacing: 0.1em;
		color: ${ props => props.color.other };

		&:hover {
			text-decoration: underline;
		}
	`,
];

const LinkWrapper = styled.div`
	${ props => bpEither("text-transform", props.textTransform ) };
	font-size: 1.1em;
	font-family: ${ props => props.font }

	&.active {
		font-weight: bold;
		opacity: 0.7;
	}

	a {
		${ clearfix.link };
		${ props => bpEither("color", props.color ) };
	}

	${ xs`${ linkStyle[0] }` };
	${ bp.sm.min`${ linkStyle[1] }` };
`;

// --------------------------------------------------

const Links = props => (
	<LinksWrapper 
		open = { props.open } 
		backgroundColor = { props.backgroundColor }
		topOffset = { props.topOffset }
	>
		{ 
			props.children.map(
				(navlink, i) => {
					return navlink.notLink === true ?
					(
						<div>
							{ navlink }
						</div>
					) :
					( 
						<LinkWrapper 
							key = { 'navlink' + i }
							{ ...props }
						>
							{ navlink }
						</LinkWrapper>
					)
				}
			) 
		}
	</LinksWrapper>
);

export default Links
