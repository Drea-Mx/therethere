import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArchitectureModules from "../components/architectures/modules/ArchitecturesModules";

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

const SingleArchitectureProject = ({ data: {architecture, header}}) => {

    const bgGetDataImage = getImage(header.logos.asset)
    const bgGetDataImageAlt = header.logos.alt


    return(
        <Layout id='top'>
        <Seo
          title={architecture.seo.title} image={architecture.seo.image.asset.url} description={architecture.seo.description}
        />
        <ArchitecturesContainer >
            <div className="window">
                <div className="cont">
                    <div className="top">
                        <h2>{architecture.title}</h2>
                    </div>
                    <div className="bot">
                        <p>ABOUT</p>
                        <div className="texto">

                        </div>
                    </div>
                </div>
            </div>
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
                    <button>+ INFO</button>
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
      </Layout>
    )
}

const ArchitecturesContainer = styled.div`
.window {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(244,8,244,0.5);
    backdrop-filter: blur(7px);
    z-index: 5;
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
            top: 250px;
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
                color: white;
            }
        }
    }
`


export default SingleArchitectureProject;
