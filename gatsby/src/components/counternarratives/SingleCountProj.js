import React, { useState } from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Parser from 'html-react-parser';

const SingleCountProj = ({title, metaInfo, thumbnail, video}) => {

    const bgGetDataImage = getImage(thumbnail.asset)
    const bgGetDataImageAlt = thumbnail.alt

    const [click, setClick] = useState(0)

    return(
        <SingleCountProjContainer className='project'>
            <div className={click ? 'overlay clicked' : 'overlay'}>
                <button className='close' onClick={() => setClick(!click)}>
                    <img src='/Close.svg' alt='Close button' />
                </button>
                <div className='iz'>
                    <h1>{title}</h1>
                </div>
                <div className='de'>
                    <div className='player'>
                        {Parser(video)}
                    </div>
                </div>
            </div>
            <button onClick={() => setClick(!click)}>
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                    <div className='cont'>
                        <div className='text'>
                            <h2>{title}</h2>
                            <p>{metaInfo}</p>
                        </div>
                    </div>
                </div>
                
            </button>
        </SingleCountProjContainer>
    )
}

const SingleCountProjContainer = styled.div`
.clicked {
    top: 0 !important;
}
.overlay {
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
    button {
        position: absolute;
        top: 50px;
        right: 50px;
        img {
            width: 20px;
        }
    }
    .iz {
        grid-column: 1/4;
        h1 {
            font-size: 2.5rem;
        }
    }
    .de {
        grid-column: 4/10;
        .player {
            width: 100%;
            iframe {
                width: 100%;
            }
        }
    }
}
button {
    &:hover {
        .image {
            img {
                filter: blur(10px);
            }
            .cont {
                opacity: 1;
            }
        }
    }
    .image {
        position: relative;
        img {
                filter: blur(0);
                transition: filter 350ms ease-in-out;
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
            transition: opacity 350ms ease-in-out;
            .text {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px;
                text-align: center;
                color: white;
            }
        }
    }
}
`

export default SingleCountProj