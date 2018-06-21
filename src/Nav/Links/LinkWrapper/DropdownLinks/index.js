import { bp, shadow, xs, } from "codogo-utility-functions";
import styled, { css, } from "styled-components";

import DropdownLink from "./DropdownLink";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const dropdownStyle = [
	css`
		background: none;
		flex-direction: column;
		display: flex;
		max-height: 99em;
		opacity: 1;
		height: auto;
		overflow: hidden;
		transition: opacity 0.5s linear, max-height 0.5s linear;
	`,
	css`
		background: white;
		display: none;
		flex-direction: column;
		position: absolute;

		${ props => props.clear && "border-radius: 3px" };

		${ shadow(2) };
		${ props => props.height && `top: ${ props.height.other }` };
	`,
];

const Dropdown = styled.div`
	${ xs`${ dropdownStyle[0] }` };
	${ bp.sm.min`${ dropdownStyle[1] }` };
`;

// --------------------------------------------------

const DropdownLinks = props => (
	<Dropdown
		className = "navlink-dropdown"
		height = { props.theme.height }
		clear = { props.theme.clear }
	>
		{props.dropdown.map((dropdownLink) => (
			<DropdownLink
				key = { dropdownLink.to }
				as = { dropdownLink.as }
				content = { dropdownLink.content }
				to = { dropdownLink.to }
				close = { props.close }
				theme = { props.theme }
			/>
		))}
	</Dropdown>
);

DropdownLinks.propTypes = {
	close: PropTypes.object,
	dropdown: PropTypes.any,
	open: PropTypes.any,
	theme: PropTypes.object,
};

export default DropdownLinks;
