import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";




const Header = () => {
    return(
        <HeroContainer>
            <ul className="bot">
                <li><Link to='/' activeStyle={{color: "#000000" }}>Projects</Link></li>
                <li><Link to='/counternarratives' activeStyle={{color: "#000000" }}>COUNTERNARRATIVES</Link></li>
                <li><Link to='/fictions' activeStyle={{color: "#000000" }}>FICTIONS</Link></li>
                <li><Link to='/about' activeStyle={{color: "#000000" }}>ABOUT</Link></li>
            </ul>
        </HeroContainer>
    )
}

const HeroContainer = styled.nav`
background-color: var(--white);
width: 100%;
position: fixed;
bottom: 0;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 1px -6px 43px 15px var(--pink);
z-index: 2;
    .bot {
        display: flex;
        justify-content: center;
        li {
            margin-left: 25px;
            margin-right: 25px;
        }
        a {
            text-transform: uppercase;
            font-size: 1.2rem;
        }
    }
`

export default Header