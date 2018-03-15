import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

import * as mixins from '../../style/mixins'
import * as vars from '../../style/vars'

// --------------------------------------------------

defaultProps = {
	xs: {
		topOffset: 50,
		padding: 20,
	},
	other: {
		topOffset: 50,
		padding: 20,
	},
	color: '#fff',
	backgroundColor: '#333',
}

const linksStyle = [
	css`
		align-items: center;
		background: ${ props => props.backgroundColor || defaultProps.backgroundColor };
		left: 0;
		position: absolute;
		right: 0;
		top: ${ props => props.topOffset || defaultProps.topOffset };
		transform: translateY(${props => (props.open ? 0 : -110)}%);
		transition: 0.3s all ease-out;
		${mixins.shadow(2)};
	`,
	`
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
	`,
]

const Links = styled.div`
	${mixins.xs`${linksStyle[0]}`};
	${mixins.bp.sm.min`${linksStyle[1]}`};
`

const linkStyle = [
	`
		display: block;
		padding: ${vars.dim.nav.margin.xs};
		border-bottom: 1px solid ${mixins.tr(0.1)};
	`,

	`
		line-height: ${vars.dim.nav.height.other};
		padding: 0 ${vars.dim.nav.margin.other};
		letter-spacing: 0.1em;

		&:hover {
			text-decoration: underline;
		}
	`,
]

const Link = styled.div`
	color: ${R.path(['theme', 'logo1'])};
	text-transform: uppercase;
	font-family: Montserrat;
	font-size: 1.1em;

	&.active {
		font-weight: bold;
		opacity: 0.7;
	}

	${mixins.xs`${linkStyle[0]}`};
	${mixins.bp.sm.min`${linkStyle[1]}`};
`

// --------------------------------------------------

export default props => (
	<Links open = { props.open }>
		{
			props.children.map( navlink => (
				<Link>
					{ navlink }
				</Link>
			))
		}
	</Links>
)
