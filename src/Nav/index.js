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
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	${ props => bpEither("height", props.height) };
	z-index: 10;
`;

const NavWrapper = styled.nav`
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 5;

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
	${ xs`
		position: absolute;
	` };
	${ props => bpEither("height", props.height) };
	max-width: 30%;
	align-items: center;
	display: flex;
	padding-left: 1em;
	order: 1;
	font-family: ${ props => props.font };
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
			<NavContainer height = { this.props.height } clear = { this.props.clear }>
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
							{this.props.children}
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
									color = { this.props.color }
									backgroundColor = { this.props.backgroundColor }
									{ ...this.state }
								/>
							</BurgerWrapper>
						</MobileContent>

						<Logo font = { this.props.font } height = { this.props.height }>
							{this.props.logo}
						</Logo>
					</NavInner>
				</NavWrapper>
			</NavContainer>
		);
	}
}

Nav.defaultProps = {
	padding: {
		xs: "0.5em",
		other: "1em",
	},
	color: {
		xs: "#fff",
		other: "#fff",
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
		xs: "uppercase",
		other: "uppercase",
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
