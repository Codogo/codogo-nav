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
	transparent,
} from "codogo-utility-functions";

// --------------------------------------------------

const NavContainer = styled.div`
	${ props => bpEither("height", props.height ) };
`;

const NavWrapper = styled.nav`
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 5;

	${ bp.sm.min`${ shadow(0) }` };
	${ props => bpEither("background-color", props.backgroundColor ) };
	${ props => bpEither("height", props.height ) };

	${ sm`padding: 0 1em; ` };
	${ bp.md.min`padding: 0 3em; ` };
`;

const NavInner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
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
	${ props => bpEither("background-color", props.backgroundColor ) };
`;

const BurgerWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	margin-top: -20px;
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
			>
				<NavWrapper
					height = { this.props.height }
					backgroundColor = { this.props.backgroundColor }
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
									color = { this.props.color }
									backgroundColor = { this.props.backgroundColor }
									{ ...this.state }
								/>
							</BurgerWrapper>
						</MobileContent>

						{ this.props.logo }
					</NavInner>
				</NavWrapper>
			</NavContainer>
		);
	}
}

Nav.defaultProps = {
	padding: {
		xs: "30px",
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
	height: {
		xs: "50px",
		other: "70px",
	},
};
