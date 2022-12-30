import React, { useState } from "react";
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Top from './Top'
import Bot from './Bot'
import BlockContent from '@sanity/block-content-to-react';

const HeroAbout = ({data}) => {

    const bgGetDataImage = getImage(data.sanitySettingsPage.logos.asset)
    const bgGetDataImageAlt = data.sanitySettingsPage.logos.alt

    const bgGetDataImage1 = getImage(data.sanitySettingsPage.logoSansSerif.asset)
    const bgGetDataImageAlt1 = data.sanitySettingsPage.logoSansSerif.alt

    const bgGetDataImage2 = getImage(data.sanitySettingsPage.logoSerif.asset)
    const bgGetDataImageAlt2 = data.sanitySettingsPage.logoSerif.alt


    const [clickLogo, setClickLogo] = useState(false);

    if (typeof window !== `undefined`) { // or typeof document !== 'undefined'
        // your code that uses global objects here
        document.cookie = "showedModal=showedModal; path=/";
      }



    const [windowBlur, setWindowBlur] = useState(false);


return(
    <div>
        <BlurContainer >
            <div className={windowBlur ? 'container' : 'top container'}>
                <div className='overlay'></div>
                <button className='text'  onClick={() => setWindowBlur(!windowBlur)}>
                    <BlockContent
                        blocks={data.sanityHomePage._rawDescriptionHome}
                    />
                </button>
                <div className={clickLogo ? 'logos1 element active' : 'logos1 element'}>
                    <button className='image1 image'
                        onClick={() => setClickLogo(!clickLogo)}
                    >
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage1}
                            alt={bgGetDataImageAlt1}
                        />
                    </button>
                    <button className='image2 image'
                        onClick={() => setClickLogo(!clickLogo)}
                    >
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage2}
                            alt={bgGetDataImageAlt2}
                        />
                    </button>
                    <button className="arrow"
                        onClick={() => setWindowBlur(!windowBlur)}
                    >
                        <img src='/arrowDown.svg' alt='Arrow Down Button' />
                    </button>
                </div>
            </div>

        </BlurContainer>
        <ProjectsAboutCoontainer id='top'>
            <div className="container">
                <h2 className='floatL'>{data.sanitySettingsPage.headerTitle1}</h2>
                <h2 className='floatR'>{data.sanitySettingsPage.headerTitle2}</h2>
                <div className='logos'>
                    <button className='logo' onClick={() => setWindowBlur(!windowBlur)}>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage}
                            alt={bgGetDataImageAlt}
                        />
                    </button>
                </div>
                <div className='fixed'>
                    <div className='lef'>
                        <a href={`mailto:${data.sanitySettingsPage.email}`}>E-Mail</a>
                        <a download rel="noreferrer" target='_blank' href={data.sanitySettingsPage.downloadsCV.asset.url}>Download CV</a>
                        <a href={data.sanitySettingsPage.vimeo} rel="noreferrer" target='_blank' >Vimeo</a>
                        <a href={data.sanitySettingsPage.instagramUrl} rel="noreferrer" target='_blank' >Instagram</a>
                    </div>
                    <div className='rig'>
                        
                        <a href='#about'>About</a>
                        <a href='#founding'>PRINCIPAL</a>
                        <a href='#allies'>ALLIES</a>
                        <a href='#awards'>Awards</a>
                        <a href='#news'>News</a>
                    </div>
                </div>
                <Top data={data} />
                <Bot data={data} />
                <div className='top'>
                    <div className='overlay'></div>
                    <a href='#top'>Back to top</a>
                </div>
            </div>
        </ProjectsAboutCoontainer>
    </div>
    )
}


const BlurContainer = styled.section`
.top {
    top: -120% !important;
}
.container {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    opacity: 1;
    transition: opacity 1s ease-in-out, top ease-in-out 1s;
    z-index: 5;
    .text {
        position: absolute;
        width: 100%;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;
        text-align: center;
        color: var(--pink);
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
   
        
        /* .logos1 ~ div {

        } */
    .logos1.active {
        .image1 {
            width: 30%;
            position: absolute;
            right: 40px;
            bottom: 80px;
            top: auto;
            left: auto;
            @media (max-width: 680px) {
                width: 65%;
                right: auto !important;
                left: 50% !important;
                transform: translateX(-50%);
                bottom: 150px;
            }
        }
        .image2 {
            width: 30%;
            position: absolute;
            top: 80px;
            left: 40px;
            right: auto;
            bottom: auto;
            @media (max-width: 680px) {
                width: 65%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
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

const ProjectsAboutCoontainer = styled.section`
padding: 50px;
position: relative;
z-index: 1;
background-color: var(--black);
color: var(--pink);
@media (max-width: 850px) {
    padding: 0;
}

    .container {
        position: relative;
        width: 100%;
        .fixed {
            position: fixed;
            bottom: 50px;
            padding: 20px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            z-index: 5;
            background-color: var(--black);
            @media (max-width:850px) {
                    height: 75px;
                }
            a {
                text-transform: uppercase;
            }
            .lef {
                padding-left: 50px;
                @media (max-width:850px) {
                    position: absolute;
                    bottom: 10px;
                    width: 100%;
                    text-align: center;
                    padding-left: 0;
                }
                a {
                    margin-right: 20px;
                }
            }
            .rig {
                padding-right: 50px;

                @media (max-width:850px) {
                    padding-right: 0;
                    width: 80%;
                    margin: 0 auto;
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    justify-self: center;
                }
                a {
                    margin-left: 20px;
                    
                }
            }
        }
        .floatL {
            position: fixed;
            top: 20px;
            left: 50px;
            font-size: 1rem;
            @media (max-width: 850px) {
                display: none;
            }
        }
        .floatR {
            position: fixed;
            top: 20px;
            right: 50px;
            font-size: 1rem;
            @media (max-width: 850px) {
                display: none;
            }
        }
        .logos {
            position: fixed;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            max-width: 750px;
            width: 750px;
            z-index: 4;
            @media (max-width: 850px) {
                position: static;
                width: 266px;
                margin: 0 auto;
                transform: none;
                padding-top: 50px;
            }
            .logo {
                width: 100%;
            }
        }
        .title {
            display: flex;
            position: fixed;
            top: 250px;
            left: 50px;
            @media (max-width: 850px) {
                position: static;
                margin-top: 50px;
                flex-direction: column;
                padding-left: 20px;
            }
            h1 {
                text-transform: uppercase;
                font-weight: normal;
                @media (max-width: 850px) {
                    font-size: 2rem;
                }
            }
            p {
                margin-left: 50px;
                align-self: center;
                @media (max-width: 850px) {
                    margin-left: 0;
                    align-self: flex-start;
                    margin-top: 10px;
                    width: 70%;
                }
            }
        }
        .top {
            position: relative;
            margin: 0 auto;
            width: 250px;
            height: 50px;
            @media (max-width: 850px) {
                margin-bottom: 100px;
            }
            @media (max-width: 650px) {
                display: none;
            }
            .overlay {
                text-align: center;
                margin: 0 auto;
                width: 100px;
                background-image: linear-gradient(rgba(244, 8, 244, .5), rgba(244, 8, 244, .5));
                filter: blur(15px);
                height: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-radius: 25px;
            }
            a {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                width: 180px;
                transition: color 150ms ease-in-out;
                text-transform: uppercase;
                &:hover {
                    color: #F9F9F9;
                }
            }
        }
    }

`


// const Projects = styled(Architectures)`
//     position: relative;
//     z-index: 3;
// `

// const ProjectsMovil = styled(ArchitecturesMovil)`
//     position: relative;
//     z-index: 1;
// `

export default HeroAbout