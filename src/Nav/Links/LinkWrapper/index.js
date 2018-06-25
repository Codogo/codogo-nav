import React, { Component, } from "react";
import styled, { css, } from "styled-components";
import { bp, bpEither, xs, transparent, } from "codogo-utility-functions";

import DropdownLinks from "./DropdownLinks";
import Link from "./Link";
import PropTypes from "prop-types";

// --------------------------------------------------

const linkWrapperStyle = [
	css`
		display: block;
		padding: ${ props => props.padding.xs };
		border-bottom: 1px solid ${ transparent(0.1) };

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
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
];

const LinkContainer = styled.div`
	font-family: ${ props => props.font };

	${ props => bpEither("text-transform", props.textTransform) };
	${ props => bpEither("font-size", props.fontSize) };
	${ props => bpEither("letter-spacing", props.letterSpacing) };
	${ props => bpEither("color", props.color) };

	${ xs`${ linkWrapperStyle[0] }` };
	${ bp.sm.min`${ linkWrapperStyle[1] }` };

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

class LinkWrapper extends Component {
	render() {
		const { as, to, close, dropdown, theme, i, border, content, } = this.props;

		return (
			<LinkContainer
				padding = { theme.padding }
				color = { theme.color }
				textTransform = { theme.textTransform }
				font = { theme.font }
				fontSize = { theme.fontSize }
				letterSpacing = { theme.letterSpacing }
			>
				<Link
					as = { as }
					to = { to }
					href = { to }
					onClick = { close }
					theme = { theme }
					border = { border }
				>
					{ content }
				</Link>

				{dropdown && (
					<DropdownInput
						type = "checkbox"
						name = "one"
						id = { "item-" + i }
						defaultChecked = { true }
					/>
				)}

				{dropdown && (
					<DropdownArrow htmlFor = { "item-" + i }>▼</DropdownArrow>
				)}

				{dropdown && (
					<DropdownLinks
						close = { close }
						dropdown = { dropdown }
						theme = { theme }
					/>
				)}
			</LinkContainer>
		);
	}
}

LinkWrapper.propTypes = {
	as: PropTypes.any,
	border: PropTypes.bool,
	close: PropTypes.func,
	content: PropTypes.string,
	dropdown: PropTypes.array,
	i: PropTypes.any,
	theme: PropTypes.any,
	to: PropTypes.string,
};

export default LinkWrapper;
