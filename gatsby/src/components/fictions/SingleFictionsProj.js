import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const SingleFictionsProj = ({ node }) => {

    const bgGetDataImage = getImage(node.thumbnail.asset)
    const bgGetDataImageAlt = node.thumbnail.alt

    return(
        <SingleCountProjContainer className='project'>
            <AniLink 
                to={`/fictions/${node.slug.current}`}
                cover bg="#F408F4"
                >
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                </div>
                <div className='mov'>
                    <p>+ INFO</p>
                </div>
                <div className='in'>
                    <div className='overlay'></div>
                    <div className='cont'>
                        <h2>{node.title}</h2>
                        <div>
                            <p>VIEW</p>
                        </div>
                    </div>
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
    transition: top 350ms ease-in-out;
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
    position: relative;
    .mov {
        display: none;
        @media (max-width: 850px) {
            display: block;
            p {
                margin-top: 10px;
                font-size: 1.2rem;
            }
        }
    }
    .in {
        display: block;
        opacity: 0;
        transition: opacity 250ms ease-in;
        @media (max-width: 850px) {
            display: none !important;
        }
        &:hover {
            opacity: 1;
            
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(247, 129, 247, 1);
            filter: blur(10px);
            transform: scale(1.2);
        }
        .cont {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            padding: 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: white;
            h2 {
                text-transform: uppercase;
            }
        }
    }
    
}
`

export default SingleFictionsProj