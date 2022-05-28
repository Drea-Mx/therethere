import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const Header = () => {
    return(
        <HeroContainer>
            <ul className="bot">
                <li><Link to='/'>Projects</Link></li>
                <li><Link to='/counternarratives'>COUNTERNARRATIVES</Link></li>
                <li><Link to='/fictions'>FICTIONS</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
            </ul>
        </HeroContainer>
    )
}

const HeroContainer = styled.nav`
background-color: var(--white);
width: 100%;
position: fixed;
bottom: 0;
border-color: pink;
    .bot {
        display: flex;
        justify-content: center;
        a {
            text-transform: uppercase;
        }
    }
`

export default Header