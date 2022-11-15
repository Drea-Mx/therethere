import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({black}) => {


    const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            logos {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
            title
            copyright
        }
    }
    `);

const bgGetDataImage = getImage(data.sanitySettingsPage.logos.asset)
const bgGetDataImageAlt = data.sanitySettingsPage.logos.alt


const [menu, setMenu] = useState(false);




const HeroContainer = styled.nav`
    background-color: ${black === true ? 'var(--pink)' : 'var(--white)'} ;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px -6px 43px 15px var(--pink);
    z-index: 2;
    @media (max-width: 680px) {
        position: fixed;
        top: 0;
        height: 0;
    }

        .mov {
            .menu {
                position: fixed;
                width: 100%;
                height: 50px;
                bottom: 0;
                background-color: var(--pink);
                left: 0;
                color: #FF87FF;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 1px -6px 43px 10px var(--pink);
                z-index: 2;
                @media (max-width: 680px) {
                    z-index: 2;
                }
                button {
                    color: ${black === true ? 'var(--black)' : 'var(--white)'} ;
                    margin-right: 50px;
                    text-transform: uppercase;
                    font-size: 1.8rem;
                }
                a {
                    margin-left: 50px;
                    text-transform: uppercase;
                    color: ${black === true ? 'var(--black)' : 'var(--white)'} ;
                }
            }
            .overflow {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: var(--pink);
                background-image: linear-gradient(#F408F4, #ffffff);
                z-index: 3;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 50px 20px;
                .logo {
                    filter: brightness(0) invert(1);
                    width: 266px;
                    margin: 0 auto;
                }
                .links {
                    li {
                        margin-bottom: 25px;
                        margin-top: 25px;
                        &:nth-child(2) {
                            text-align: right;
                            width: 250px;
                            margin-right: 0;
                            margin-left: auto;
                        }
                        &:nth-child(4) {
                            text-align: center;
                        }
                        a {
                            font-size: 2.5rem;
                            color: black;
                        }
                    }
                }
                .footer {
                    display: flex;
                    justify-content: space-between;
                    p {
                        width: 135px;
                        color: black;
                    }
                }
                button {
                    img {
                        width: 20px;
                        margin-top: 0px;
                    }
                }
            }
            @media (min-width: 680px) {
                display: none;
            }
        }
        .bot {
            display: flex;
            justify-content: center;
            @media (max-width: 680px) {
                display: none;
            }
            li {
                margin-left: 25px;
                margin-right: 25px;
            }
            a {
                text-transform: uppercase;
                font-size: 1.2rem;
                color: ${black === true ? 'var(--black)' : 'var(--pink)'} ;
                @media (max-width: 680px) {
                    background-color: var(--pink);
                }
            }
        }
    `




    return(
        <HeroContainer>
            <div className="mov">
                <div className="menu">
                    <a href="#top">Back to top</a>
                    <button 
                        onClick={() => setMenu(!menu)}
                    >MENU</button>
                </div>
                {
                    menu ? 
                    <div className="overflow">
                        <div className="logo">
                            <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={bgGetDataImage}
                                    alt={bgGetDataImageAlt}
                                />
                        </div>
                        <ul className="links">
                            <li><Link to='/' partiallyActive={true} activeStyle={{color: "#000000" }}>ARCHITECTURES</Link></li>
                            <li><Link to='/counternarratives' partiallyActive={true} activeStyle={{color: "#000000" }}>COUNTER NARRATIVES</Link></li>
                            <li><Link to='/fictions' partiallyActive={true} activeStyle={{color: "#000000" }}>FICTIONS</Link></li>
                            <li><Link to='/about' partiallyActive={true} activeStyle={{color: "#000000" }}>ABOUT</Link></li>
                        </ul>
                        <div className="footer">
                            <p>{data.sanitySettingsPage.title}</p>
                            <p>{data.sanitySettingsPage.copyright}</p>
                        </div>
                        <button 
                            onClick={() => setMenu(!menu)}
                        >
                            <img src="/Close.png" alt='Close button there there' />
                        </button>
                    </div>
                    :
                    ''
                }
                
            </div>
            <ul className="bot">
                <li><AniLink fade top="entry" bg="#FFF" partiallyActive={false} to='/' activeStyle={{color: "#000000" }} >ARCHITECTURES</AniLink></li>
                <li><AniLink  fade top="entry" bg="#FFF" partiallyActive={true} to='/counternarratives' activeStyle={{color: "#000000" }}>COUNTERNARRATIVES</AniLink></li>
                <li><AniLink  fade top="entry" bg="#FFF" partiallyActive={true} to='/fictions' activeStyle={{color: "#000000" }}>FICTIONS</AniLink></li>
                <li><AniLink fade top="entry" bg="#FFF" partiallyActive={true} to='/about' activeStyle={{color: "#000000" }} >ABOUT</AniLink></li>
            </ul>
        </HeroContainer>
    )
}



export default Header