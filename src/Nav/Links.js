import React from "react";
import styled, { css, } from "styled-components";

import Link from "./Link";

import {
	bp,
	shadow,
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

// --------------------------------------------------

const Links = props => (
	<LinksWrapper
		open = { props.open }
		backgroundColor = { props.theme.backgroundColor }
		fontSize = { props.theme.fontSize }
		font = { props.theme.font }
		topOffset = { props.theme.topOffset }
	>
		{props.links.map((navlink, i) => {
			return (
				<Link
					key = { navlink.to } 
					i = { i }
					content = { navlink.content }
					as = { navlink.as }
					to = { navlink.to }
					dropdown = { navlink.dropdown }
					border = { navlink.border }
					theme = { props.theme }
				/>
			);
		})}
	</LinksWrapper>
);

export default Links;
