import React from "react";
import styled, { css, } from "styled-components";

import {
	bp,
	shadow,
	xs,
	transparent,
	clearfix,
	bpEither,
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
		transform: translateY(${ props => ( props.open ? 0 : -110 ) }%);
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
		padding: ${ props => props.margin.xs };
		border-bottom: 1px solid ${ transparent(0.1) };
		color: ${ props => props.color.xs };
	`,
	css`
		line-height: ${ props => props.height.other };
		padding: 0 ${ props => props.margin.other };
		letter-spacing: 0.1em;
		color: ${ props => props.color.other };

		&:hover {
			text-decoration: underline;
		}
	`,
];

const Link = styled.div`
	text-transform: ${ props => props.textTransform };
	font-size: 1.1em;

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
				(navlink, i) => 
				<Link 
					key = { 'navlink' + i }
					{ ...props }
				>
					{ navlink }
				</Link>
			) 
		}
	</LinksWrapper>
);

Links.defaultProps = {
	textTransform: {
		xs: "uppercase",
		other: "uppercase",
	},
	topOffset: {
		xs: "50px",
		other: "70px",
	},
	padding: {
		xs: "20px",
		other: "30px",
	},
	margin: {
		xs: "20px",
		other: "30px",
	},
	height: {
		xs: "50px",
		other: "30px",
	},
	color: {
		xs: "#fff",
		other: "#fff",
	},
	backgroundColor: {
		xs: "#333",
		other: "#333",
	},
};


export default Links
