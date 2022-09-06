import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";
const SingleCountProj = ({ node }) => {

    const bgGetDataImage = getImage(node.thumbnail.asset)
    const bgGetDataImageAlt = node.thumbnail.alt

    return(
        <SingleCountProjContainer className='project'>
            <AniLink 
                to={`/counternarratives/${node.slug.current}`}
                cover bg="#F408F4"
                >
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                    <div className='cont'>
                        <div className='text'>
                            <h2>{node.title}</h2>
                            <div>
                                <p>{node.city},</p>
                                <p>{node.year}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='mov'>
                    <div className='topp'>
                        <p>{node.city}</p>
                        <p>{node.year}</p>
                    </div>
                    <h2>{node.title}</h2>
                    <p className='inff'>+ INFO</p>
                </div>
            </AniLink >
        </SingleCountProjContainer>
    )
}

const SingleCountProjContainer = styled.div`
@media (max-width: 850px) {
    margin-bottom: 50px;
    padding: 20px;
}
.clicked {
    top: 0 !important;
}
.overlayx {
    position: fixed;
    top: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, rgba(241, 115, 56, 0.7) 80.48%, rgba(243, 13, 243, 0.681771) 100%);
    backdrop-filter: blur(20px);
    transform: scale(1.2);
    transition: all 350ms ease-in-out;
    z-index: 4;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    @media (max-width: 650px) {
        background: linear-gradient(180deg, rgba(241, 115, 56, 0.7) 80.48%, rgba(243, 13, 243, 0.681771) 100%);
        backdrop-filter: blur(20px);
    }
    button {
        position: absolute;
        top: 50px;
        right: 50px;
        @media (max-width: 650px) {
            right: 20px;
        }
        img {
            width: 20px;
        }
    }
    .iz {
        grid-column: 1/4;
        overflow-x: scroll;
        height: calc(100vh - 100px);
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        padding-bottom: 50px;
        @media (max-width: 850px) {
            grid-column: 1/6;
        }
        @media (max-width: 650px) {
            grid-column: 1/11;
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr;
            z-index: 5;
            h1 {
                grid-row: 1/2;
            }
            .body {
                grid-row: 2/3;
            }
            .team {
                grid-row: 3/4;
            }
            .share {
                grid-row: 4/5;
            }
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }
        h1 {
            margin-bottom: 20px;
            font-size: 2.5rem;
            word-break: break-word;
        }
        .share {
            margin-bottom: 20px;
            p, a {
                text-transform: uppercase;
            }
            a {
                margin-right: 8px;
            }
        }
        .body {
            p {
                margin: 10px 0;
            }
        }
        
    }
    .de {
        grid-column: 4/11;
        @media (max-width: 850px) {
            grid-column: 6/11;
        }
        @media (max-width: 650px) {
            display: none;
        }
        .player {
            padding: 0 50px;
            width: 100%;
            iframe {
                width: 100%;
            }
        }
    }
}
a {
    transition: all 350ms ease-in;
    .mov {
        display: none;
        @media (max-width: 850px) {
            display: block;
            width: 100%;
            .topp {
                margin-top: 20px;
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            h2 {
                font-size: 2rem;
                margin: 10px 0;
                text-transform: uppercase;
            }
            p.inff {
                font-size: 1.5rem;
            }
        }
    }
    .image {
        transition: all 350ms ease-in;
        position: relative;
        img {
                filter: blur(0);
                transition: all 350ms ease-in-out;
            }
        .cont {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 350ms ease-in-out;
            .text {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 40px 20px;
                text-align: center;
                color: white;
                h2 {
                    text-transform: uppercase;
                }
                div {
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
    &:hover {
        .image {
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            transition: all 350ms ease-in;
            &:before {
                display:block;
                content:'';
                position:absolute;
                width:100%;
                height:100%;

                box-shadow:inset 10px 10px 16px 16px var(--pink);
            } 
            img {
                filter: blur(10px);
                overflow: hidden;
                @media (max-width: 850px) {
                    filter: none;
                }
            }
            .cont {
                opacity: 1;
                @media (max-width: 850px) {
                    display: none;
                }
            }
        }
    }
    
}
`

export default SingleCountProj