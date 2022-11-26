import React, { useState } from "react";
import { graphql, Link } from "gatsby";
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

const SingleArchitectureProject = ({ data: {architecture, header}, pageContext}) => {

    const {next, prev} = pageContext

    const bgGetDataImage = getImage(header.logos.asset)
    const bgGetDataImageAlt = header.logos.alt


    const [info, setInfo] = useState(false);


    return(
        <Layout id='top'>
        <Seo
          title={architecture.seo.title} image={architecture.seo.image.asset.url} description={architecture.seo.description}
        />
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
                <button className="closeButton">
                    <img className="close" src='/Close.svg' alt='Close button' />
                </button>
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
                <div className='logo'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                </div>
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
      </Layout>
    )
}


const ArchitecturesContainerMovil = styled.section`
    display: none;
    .fakeBg {
        position: absolute;
        height: 100vh;
        width: auto;
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
                width: 30px;
                position: fixed;
                bottom: 30px;
                right: 20px;
            }
        }
    }
    @media (max-width: 680px) {
        display: block;
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
            width: 25px;
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
            h2 {
                font-size: 5vw;
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
