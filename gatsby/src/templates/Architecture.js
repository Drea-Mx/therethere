import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArchitectureModules from "../components/architectures/modules/ArchitecturesModules";
import BlockContent from '@sanity/block-content-to-react';
import AniLink from "gatsby-plugin-transition-link/AniLink";


import arrowPrev from '../assets/images/back.png'
import arrowNext from '../assets/images/Next.png'


export const query = graphql`
  query ($slug: String!) {
    settings:     sanitySettingsPage {
        headerTitle1
        headerTitle2
        logos {
            alt
            asset {
                gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: BLURRED
                )
            }
        }
        logoSansSerif {
            alt
            asset {
                gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: BLURRED
                )
            }
        }
        logoSerif {
        alt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
            )
        }
        }
    }
    home: sanityHomePage {
        _rawDescriptionHome
    }
    header: sanitySettingsPage {
        headerTitle1
        headerTitle2
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
    }
    architecture: sanityArchitecture(slug: { current: { eq: $slug } }) {
        title
        locationMovil
        yearMovil
        _rawProjectDescription
        info {
            _key
            label
            value
        }
        editorialModule {
            ... on SanityOneColumn {
                _key
                _type
                fullWidth
                image {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
                }
            }
            ... on SanityTwoColumn {
                _key
                _type
                image1 {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
                }
                image2 {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
                }
            }
            ... on SanityThreeColumn {
                _key
                _type
                image1 {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
                }
                image2 {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
                }
                image3 {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
                }
            }
        }
        seo {
            title
            description
            image {
                asset {
                url
                }
            }
        }
    }
  }
`;

const SingleArchitectureProject = ({ data: {architecture, header, settings, home}, pageContext}) => {

    const {next, prev} = pageContext

    const bgGetDataImage = getImage(header.logos.asset)
    const bgGetDataImageAlt = header.logos.alt


    const [info, setInfo] = useState(false);



    const bgGetDataImage1 = getImage(settings.logoSansSerif.asset)
    const bgGetDataImageAlt1 = settings.logoSansSerif.alt

    const bgGetDataImage2 = getImage(settings.logoSerif.asset)
    const bgGetDataImageAlt2 = settings.logoSerif.alt

    const [clickLogo, setClickLogo] = useState(false);

    if (typeof window !== `undefined`) { // or typeof document !== 'undefined'
        // your code that uses global objects here
        document.cookie = "showedModal=showedModal; path=/";
      }



    const [windowBlur, setWindowBlur] = useState(false);





    return(
        <Layout id='top'>
        <Seo
          title={architecture.seo.title} image={architecture.seo.image.asset.url} description={architecture.seo.description}
        />
        <div>
        <BlurContainer >
                <div className={windowBlur ? 'container' : 'top container'}>
                    <div className='overlay'></div>
                    <button className='text'  onClick={() => setWindowBlur(!windowBlur)}>
                        <BlockContent
                            blocks={home._rawDescriptionHome}
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
            <ArchitecturesContainer >
            <button className={info ? 'window open' : 'window'} onClick={() => setInfo(!info)}>
                <div className="arrows">
                    <div className="next">
                        {next &&
                            <AniLink to={`/${next.slug.current}`} direction="left" cover bg="#F408F4">
                            </AniLink>
                        }
                    </div>
                    <div className="prev">
                        {prev &&
                            <AniLink to={`/${prev.slug.current}`} direction="right"  cover bg="#F408F4">
                            </AniLink>
                        }
                    </div>
                </div>
                <span className="closeButton">
                    <img className="close" src='/Close.svg' alt='Close button' />
                </span>
                <div className="cont">
                    <div className="top">
                        <h2>{architecture.title}</h2>
                    </div>
                    <div className="about">
                        <p>ABOUT</p>
                    </div>
                    <div className="texto">
                        <div className="scroll">
                            <BlockContent
                                blocks={architecture._rawProjectDescription}
                            />
                        </div>  
                        <div className="bar"></div>
                    </div>
                    <div className="information">
                        {architecture.info.map(({ _key, label, value }) => {
                            return (
                                <div className="inf" key={_key}>
                                    <p className="label">{label}</p>
                                    <p className="value">{value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </button>
            <div className="container">
            <h2 className='floatL'>{header.headerTitle1}</h2>
            <h2 className='floatR'>{header.headerTitle2}</h2>
            <div className='logos'>
                <button className='logo' onClick={() => setWindowBlur(!windowBlur)}>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                </button>
            </div>
            <div className='title'>
                <div className="left">
                    <button onClick={() => setInfo(!info)}>+ INFO</button>
                </div>
                <div className="center">
                    <h1>{architecture.title}</h1>
                </div>
                <div className="ri">
                    <div>
                        <p>LOCATION</p>
                        <p>{architecture.locationMovil}</p>
                    </div>
                    <div>
                        <p>YEAR</p>
                        <p>{architecture.yearMovil}</p>
                    </div>
                </div>
            </div>
            
            <ArchitectureModules architectureModule={architecture.editorialModule} />
            <div className='top'>
                <div className='overlay'></div>
                <a href='#top'>Back to top</a>
            </div>
        </div>

        </ArchitecturesContainer>

        <ArchitecturesContainerMovil>
            <img className="fakeBg" src='/arch.png' alt="There there" />
            <div className="container">
                <h1>{architecture.title}</h1>
                <div className="about">
                    <h2>About</h2>
                    <div className="texto">
                        <BlockContent
                            blocks={architecture._rawProjectDescription}
                        />
                    </div>
                    <div className="op"></div>
                </div>
                <div className="information">
                    {architecture.info.map(({ _key, label, value }) => {
                        return (
                            <div className="inf" key={_key}>
                                <p className="label">{label}</p>
                                <p className="value">{value}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="ops"></div>
                <AniLink to='/' className='closeButton' cover bg="#F408F4" direction="down">
                    <img className="close" src='/Close.svg' alt='Close button' />
                </AniLink>
            </div>
        </ArchitecturesContainerMovil>
        </div>
        
      </Layout>
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


const ArchitecturesContainerMovil = styled.section`
    display: none;
    .fakeBg {
        position: absolute;
        height: auto;
        width: 100%
    }
    .container {
        background-color: #F408F4;
        opacity: 0.8;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100vw;
        z-index: 2;
        padding: 20px;
        overflow-y: scroll;
        color: white;
        position: fixed;
        h1 {
            font-size: 40px;
            word-break: break-word;
            text-transform: uppercase;
        }
        .about {
            margin-top: 50px;
            position: relative;
            .op {
                    position: absolute;
                    height: 50px;
                    width: 100%;
                    background: linear-gradient(to bottom, transparent, #F408F4);
                    bottom: 0;
                }
            .texto {
                height: 300px;
                overflow-y: scroll;
                position: relative;
                padding-bottom: 50px;
                position: relative;
                p {
                    margin: 10px auto;
                }
                
            }
            h2 {
                font-size: 28px;
                margin-bottom: 10px;
                text-transform: uppercase;
            }

            p {
                font-size: 14px;
            }
        }
        .information {
            padding-top: 50px;
            .inf {
                margin-bottom: 15px;
            }
            p {
                font-size: 14px;
            }
        }
        .ops {
            position: fixed;
            bottom: 0;
            height: 50px;
            width: 100%;
            background: linear-gradient(rgba(246, 116, 246, 0), rgba(246, 116, 246, 1));
        }
        .closeButton {
            img {
                width: 20px;
                position: fixed;
                bottom: 30px;
                right: 20px;
            }
        }
    }
    @media (max-width: 680px) {
        display: block;
        height: -webkit-fill-available;
    }
`




const ArchitecturesContainer = styled.div`
.open {
    top: 0 !important;
    overflow: scroll;
}
.window {
    position: fixed;
    top: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: #F408F4;
    opacity: 0.85;
    filter: saturate(1.2);
/* Note: backdrop-filter has minimal browser support */
    z-index: 5;
    transition: top 350ms ease-in-out;
    .arrows {
        position: absolute;
        top: 100px;
        left: 65%;
        bottom: 0;
        right: 0;
        z-index: 3;
        .next a {
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            cursor: url(${arrowNext}) 10 10, auto;
            z-index: 4;
        }
        .prev  a{
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            cursor: url(${arrowPrev}) 10 10, auto;
            z-index: 4;
        }
    }
    .closeButton {
        position: absolute;
        top: 50px;
        right: 50px;
        img {
            width: 20px;
        }
    }
    .cont {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        padding: 50px;
        color: white;
        align-items: baseline;
        text-align: left;
        .top {
            grid-column: 1/11;
            grid-row: 1/2;
            margin-top: 50px;
            margin-bottom: 50PX;
            grid-column: 1/7;
            h2 {
                font-size: 70px;
                color: white;
                text-transform: uppercase;
                line-height: 0.9;
            }
        }
        .about {
            grid-row: 2/3;
            grid-column: 1/2;
            align-self: flex-start;
            p {
                font-size: 30px;
            }
        }
        .texto {
            grid-column: 2/6;
            grid-row: 2/3;
            position: relative;
            overflow: hidden;
            align-self: flex-start;
            .scroll {
                height: 50vh;
                overflow: scroll;
                position: relative;
            }
            .bar {
                position: absolute;
                bottom: -20px;  
                left: -100px;
                height: 50px;
                background-color: #F408F4;
                opacity: 1;
                filter: blur(20px);
                width: 3000px;    
                overflow: hidden;            
                pointer-events: none; /* so the text is still selectable */
            }
            p {
                margin: 10px auto;
            }
        }
        .information {
            grid-row: 2/3;
            grid-column: 7/11;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            align-self: flex-start;
            padding-top: 8px;
            p {
                text-transform: uppercase;
            }
        }
    }
}
.container {
        position: relative;
        width: 100%;
        h2 {
            font-size: 1rem;
        }
        .floatL {
            position: fixed;
            top: 20px;
            left: 50px;
            @media (max-width: 850px) {
                display: none;
            }
        }
        .floatR {
            position: fixed;
            top: 20px;
            right: 50px;
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
            display: grid;
            position: fixed;
            top: 350px;
            left: 50px;
            width: calc(100% - 100px);
            grid-template-columns: repeat(10, 1fr);
            @media (max-width: 850px) {
                position: static;
                margin-top: 50px;
                flex-direction: column;
                padding-left: 20px;
            }
            .left {
                grid-column: 1/3;
                button {
                    font-size: 30px;
                }
            }
            .center {
                grid-column: 3/9;
            }
            .ri {
                grid-column: 9/11;
                div {
                    margin-bottom: 20px;
                }
            }
            button {
                color: var(--pink);
            }
            h1 {
                text-transform: uppercase;
                font-weight: normal;
                font-size: 70px;
                @media (max-width: 850px) {
                    font-size: 2rem;
                }
            }
            p {
                margin-left: 50px;
                align-self: center;
                text-transform: uppercase;
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
            width: 150px;
            height: 50px;
            margin-bottom: 150px;
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
                background-color: pink;
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

    @media (max-width: 680px) {
        display: none;
    }
`



export default SingleArchitectureProject;
