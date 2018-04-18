import React from "react";
import styled from "styled-components";

import Links from "./Links";
import Burger from "./Burger";
import theme from "./theme";

import {
	bp,
	bpEither,
	contained,
	shadow,
	sm,
	xs,
	transparent,
} from "codogo-utility-functions";

// --------------------------------------------------

const NavContainer = styled.div`
	${ props => props.fixed &&
		`
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
		`
	};
	${ props => bpEither("height", props.height) };
	${ props => props.clear && `height: 0 !important;` }
	z-index: 10;
`;

const NavWrapper = styled.nav`
	z-index: 5;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;

	${ props =>
		!props.clear && bpEither("background-color", props.backgroundColor) };
	${ props => bpEither("height", props.height) };

	${ sm`padding: 0 1em; ` };
	${ bp.md.min`padding: 0 3em; ` };

	${ props => props.shadow && shadow(1) };
`;

const NavInner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	${ bp.sm.min`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	` };
`;

const MobileContent = styled.div`
	${ bp.sm.min`display: none;` };
	${ contained() };
`;

const Overlay = styled.div`
	${ contained() };
	${ ({ open, }) => (open ? shadow(1) : "") };
	transition: 0.3s all ease-out;
	${ props => bpEither("background-color", props.backgroundColor) };
`;

const BurgerWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	margin-top: -20px;
`;

const Logo = styled.div`
	align-items: center;
	display: flex;
	font-family: ${ props => props.font };
	max-width: 30%;
	order: 1;
	padding-left: 1em;

	${ props => bpEither("height", props.height) };

	${ xs`
		position: absolute;
		max-width: 60%;
	` };
`;

// -------------------------------

export default class Nav extends React.Component {
	static defaultProps = theme;

	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
	}

	CloseMenu = () => {
		this.setState({
			open: false,
		})
	};

	ToggleMenu = () => {
		this.setState({
			open: !this.state.open,
		})
	};

	render() { 
		const {
			backgroundColor,
			children,
			clear,
			fixed,
			font,
			height,
			highlightColor,
			shadow,
			logo,
			links,
		} = this.props;

		const {
			open,
		} = this.state;

		return (
			<NavContainer 
				height = { height }
				fixed = { fixed }
				clear = { clear }
			>
				<NavWrapper
					height = { height }
					backgroundColor = { backgroundColor }
					clear = { clear }
					shadow = { shadow }
				>
					<NavInner>
						<Links
							theme = { {
								...this.props,
							} }
							open = { open }
							close = { this.CloseMenu }
							links = { links }
						>
							{ children }
						</Links>

						<MobileContent>
							<Overlay
								backgroundColor = { backgroundColor }
								open = { open }
							/>

							<BurgerWrapper
								onClick = { this.ToggleMenu }
							>
								<Burger
									highlightColor = { highlightColor }
									backgroundColor = { backgroundColor }
									open = { open }
								/>
							</BurgerWrapper>
						</MobileContent>

						{
							logo && 
							<Logo font = { font } height = { height }>
								{ logo }
							</Logo>
						}
					</NavInner>
				</NavWrapper>
			</NavContainer>
		);
	}
}
