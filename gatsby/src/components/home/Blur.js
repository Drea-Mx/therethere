import React, { useState } from "react";
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const Blur = ({data}) => {

    const bgGetDataImage1 = getImage(data.sanitySettingsPage.logoSansSerif.asset)
    const bgGetDataImageAlt1 = data.sanitySettingsPage.logoSansSerif.alt

    const bgGetDataImage2 = getImage(data.sanitySettingsPage.logoSerif.asset)
    const bgGetDataImageAlt2 = data.sanitySettingsPage.logoSerif.alt


    const [clickLogo, setClickLogo] = useState(false);

    const [clickArrow, setClickArrow] = useState(false);


    return(
        <BlurContainer>
            <div className={clickArrow ? 'top container' : 'container'}>
                <div className='overlay'></div>
                <div className='text'>
                    <BlockContent
                        blocks={data.sanityHomePage._rawDescriptionHome}
                    />
                </div>
                <div className={clickLogo ? 'active logos1 element' : 'logos1 element'}>
                    <div className='image1 image'
                        onClick={() => setClickLogo(!clickLogo)}
                    >
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage1}
                            alt={bgGetDataImageAlt1}
                        />
                    </div>
                    <div className='image2 image'
                        onClick={() => setClickLogo(!clickLogo)}
                    >
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage2}
                            alt={bgGetDataImageAlt2}
                        />
                    </div>
                    <button className="arrow"
                        onClick={() => setClickArrow(!clickArrow)}
                    >
                        <img src='/arrowDown.svg' alt='Arrow Down Button' />
                    </button>
                </div>
            </div>
        </BlurContainer>
    )
}

const BlurContainer = styled.section`
.top {
    top: -100% !important;
}
.container {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    transition: top 1s ease-in-out;
    z-index: 3;
    .text {
        position: absolute;
        width: 100%;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        text-align: center;
        @media (max-width: 680px) {
            top: 45%;
        }
        p {
            line-height: 1.5;
        }
    }
    .arrow {
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        animation: arrow 1s ease-in-out infinite forwards;
        @media (max-width: 680px) {
            bottom: 30px;
            animation: arrowM 1s ease-in-out infinite forwards;
        }
    }
    @keyframes arrow {
        0% {
            bottom: 80px;
        }
        50% {
            bottom: 100px;
        }
        100% {
            bottom: 80px
        }
    }
    @keyframes arrowM {
        0% {
            bottom: 30px;
        }
        50% {
            bottom: 50px;
        }
        100% {
            bottom: 30px
        }
    }
    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        background: rgba(255,255,255,0.5);
        backdrop-filter: blur(10px);
        z-index: 2;
        @media (max-width: 680px) {
            background: rgba(255,255,255,0.6);
            backdrop-filter: blur(10px);
        }
    }
    .logos1.active {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
        .image1 {
            width: 30%;
            position: absolute;
            top: auto;
            left: auto;

            right: 40px;
            bottom: 80px;
            @media (max-width: 680px) {
                width: 65%;
                left: 50%;
                bottom: 150px;
                transform: translateX(-50%);
            }
        }
        .image2 {
            width: 30%;
            position: absolute;
            right: auto;
            bottom: auto;

            top: 80px;
            left: 40px;
            @media (max-width: 680px) {
                width: 65%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
        
        /* .logos1 ~ div {

        } */
    .logos1 {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
        .image1 {
            width: 30%;
            position: absolute;
            top: 80px;
            left: 40px;
            @media (max-width: 680px) {
                width: 65%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .image2 {
            width: 30%;
            position: absolute;
            right: 40px;
            bottom: 80px;
            @media (max-width: 680px) {
                width: 65%;
                right: auto !important;
                left: 50% !important;
                transform: translateX(-50%);
                bottom: 150px;
            }
        }
    }
}
`


export default Blur