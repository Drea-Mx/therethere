import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/layout/seo";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import Layout from "../components/layout/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import arrowPrev from '../assets/images/alPink.png'
import arrowNext from '../assets/images/arPink.png'

export const query = graphql`
  query ($slug: String!) {
    fiction: sanityFiction(slug: { current: { eq: $slug } }) {
        title
        credits
        _rawProjectDescription
        thumbnail {
            alt
            asset {
                gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: DOMINANT_COLOR
                )
            }
        }
        prev {
            slug {
                current
            }
        }
        next {
            slug {
                current
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

const SingleFictionProject = ({ data: { fiction }}) => {

    const bgGetDataImage = getImage(fiction.thumbnail.asset)
    const bgGetDataImageAlt = fiction.thumbnail.alt

    return(
        <Layout>
        <Seo
          title={fiction.seo.title} image={fiction.seo.image.asset.url} description={fiction.seo.description}
        />


        <SingleFictionProjContainer className='project'>
            <img src='/bgFictions.png' alt="backgound Counter Narratives" />
            <div className='overlayx clicked'>
                <AniLink to={`/fictions`} className='close' cover bg="#F408F4">
                    <img src='/xPink.png' alt='Close button' />
                </AniLink>
                <div className="arrow">
                    <AniLink to={`/fictions/${fiction.prev.slug.current}`} direction="left" className='back' cover bg="#F408F4">
                        <img src='/arPink.png' alt='Back button' />
                    </AniLink>
                    <AniLink to={`/fictions/${fiction.next.slug.current}`} direction="right" className='next' cover bg="#F408F4">
                        <img src='/arPink.png' alt='Next button' />
                    </AniLink>
                </div>
                <div className='iz'>
                    <h1>{fiction.title}</h1>
                    <div className='team'>
                        <p>CREDITS:</p>
                        <p>{fiction.credits}</p>
                    </div>
                    <div className='body'>
                        <BlockContent
                            blocks={fiction._rawProjectDescription}
                        />
                    </div>
                </div>
                <div className='de'>
                    <div className='image'>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage}
                            alt={bgGetDataImageAlt}
                        />
                    </div>
                </div>
            </div>
        </SingleFictionProjContainer>
      </Layout>
    )
}


const SingleFictionProjContainer = styled.div`
height: 100vh;
width: 100vw;
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
    transition: top 350ms ease-in-out;
    z-index: 4;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    color: var(--pink);
    background: rgba(249, 249, 249, 0.6);
    backdrop-filter: blur(20px);
    @media (max-width: 650px) {
        background: white;
        padding: 0;
    }
    .arrow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        z-index: 1;
        a {
            &:first-child {
                img {
                    transform: rotate(180deg);
                }
            }
        }
        @media (max-width: 850px) {
            display: none;
        }
        img {
            display: none;
        }
        .next {
            width: 50%;
            height: 100%;
            cursor: url(${arrowNext}) 10 10, auto;
        }
        .back {
            width: 50%;
            height: 100%;
            cursor: url(${arrowPrev}) 10 10, auto;
        }
    }
    a.close {
        position: absolute;
        top: 50px;
        right: 50px;
        z-index: 2;
        @media (max-width: 650px) {
            right: 30px;
            bottom: 25px;
            top: auto;
            width: 20px;
            height: 20px;
            z-index: 6;
        }
        img {
            width: 20px;
            height: 20px;
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
        @media (max-width: 850px) {
            grid-column: 1/11;
            height: 100vh;
            display: flex;
            flex-direction: column;
            z-index: 5;
            h1 {
                grid-row: 1/2;
                padding: 20px 20px 10px;
                margin-bottom: 0 !important;
            }
            .body {
                grid-row: 2/3;
                height: 200px;
                overflow-y: scroll;
                padding: 20px 20px 0px;
                position: relative;
                &::-webkit-scrollbar {
                    display: none;
                }
                .bar {
                    height: 50px;
                    width: 100%;
                    box-shadow: 1px -6px 43px 10px var(--pink);
                    position: relative;
                    bottom: 0;
                    left: 0;
                }
            }
            .team {
                grid-row: 3/4;
                padding: 20px;
                margin: 0 !important;
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
        .body {
            p {
                margin: 10px 0;
            }
        }
        
    }
    .de {
        grid-column: 4/11;
        @media (max-width: 850px) {
            display: none;
        }
        .image {
            padding: 0 50px;
            width: 100%;
            display: flex;
            justify-content: center;
            img {
                width: auto;
                max-height: 80vh;
            }
        }
    }
}
`



export default SingleFictionProject;
