import { bp, shadow, xs, } from "codogo-utility-functions";
import styled, { css, } from "styled-components";

import LinkWrapper from "./LinkWrapper";
import PropTypes from "prop-types";
import React from "react";

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
				<LinkWrapper
					key = { navlink.to }
					i = { i }
					content = { navlink.content }
					as = { navlink.as }
					to = { navlink.to }
					dropdown = { navlink.dropdown }
					border = { navlink.border }
					theme = { props.theme }
					close = { props.close }
				/>
			);
		})}
	</LinksWrapper>
);


Links.propTypes = {
	close: PropTypes.func,
	links: PropTypes.any,
	open: PropTypes.bool,
	theme: PropTypes.object,
};

export default Links;
