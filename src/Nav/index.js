import React from "react";
import styled from "styled-components";

import Links from "./Links";
import Burger from "./Burger";
import Fade from "./Fade";

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

const Dark = styled.div`
	background: ${ transparent(0.5) };
	position: fixed;
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
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	render() {
		return (
			<NavContainer 
				height = { this.props.height }
				fixed = { this.props.fixed || false }
				clear = { this.props.clear || false }
			>
				<NavWrapper
					height = { this.props.height }
					backgroundColor = { this.props.backgroundColor }
					clear = { this.props.clear || false }
					shadow = { this.props.shadow || false }
				>
					<NavInner>
						<MobileContent>
							<Fade visible = { this.state.open }>
								<Dark
									onClick = { () =>
										this.setState({
											open: false,
										})
									}
								/>
							</Fade>
						</MobileContent>

						<Links
							close = { () =>
								this.setState({
									open: false,
								})
							}
							{ ...this.props }
							{ ...this.state }
						>
							{ this.props.children }
						</Links>

						<MobileContent>
							<Overlay
								backgroundColor = { this.props.backgroundColor }
								{ ...this.state }
							/>

							<BurgerWrapper
								onClick = { () =>
									this.setState({
										open: !this.state.open,
									})
								}
							>
								<Burger
									highlightColor = { this.props.highlightColor }
									backgroundColor = { this.props.backgroundColor }
									{ ...this.state }
								/>
							</BurgerWrapper>
						</MobileContent>

						<Logo font = { this.props.font } height = { this.props.height }>
							{ this.props.logo }
						</Logo>
					</NavInner>
				</NavWrapper>
			</NavContainer>
		);
	}
}

Nav.defaultProps = {
	padding: {
		xs: "0.75em",
		other: "1em",
	},
	color: {
		xs: "#333",
		other: "#333",
	},
	highlightColor: {
		xs: "#888",
		other: "#888",
	},
	backgroundColor: {
		xs: "#333",
		other: "#333",
	},
	height: {
		xs: "50px",
		other: "70px",
	},
	font: "sans-serif",
	fontSize: {
		xs: "0.8em",
		other: "1.1em",
	},
	textTransform: {
		xs: "none",
		other: "none",
	},
	topOffset: {
		xs: "50px",
		other: "70px",
	},
	margin: {
		xs: "20px",
		other: "30px",
	},
};
