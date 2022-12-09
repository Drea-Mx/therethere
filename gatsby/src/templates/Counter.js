import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/layout/seo";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import Parser from 'html-react-parser';
import Layout from "../components/layout/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import arrowPrev from '../assets/images/back.png'
import arrowNext from '../assets/images/Next.png'


export const query = graphql`
  query ($slug: String!) {
    counter: sanityCounterNarrative(slug: { current: { eq: $slug } }) {
        title
        _rawProjectDescription
        theTeam
        vimeoId
        city
        year
        thumbnail {
            alt
            asset {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: BLURRED
                )
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

const SingleCounterProject = ({ data: { counter }, pageContext}) => {


    const bgGetDataImage = getImage(counter.thumbnail.asset)
    const bgGetDataImageAlt = counter.thumbnail.alt


    const {next, prev} = pageContext

    const pathLink = typeof window !== 'undefined' ? window.location.href : '';
    const video = `<iframe src="https://player.vimeo.com/video/${counter.vimeoId}?h=58c4a2b2c3" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`


    return(
        <Layout>
        <Seo
          title={counter.seo.title} image={counter.seo.image.asset.url} description={counter.seo.description}
        />


        <SingleCountProjContainer className='project'>
            <img className="bg" src='/counterBG.png' alt="backgound Counter Narratives" />
            <div className='overlayx clicked'>
                <AniLink to={`/counternarratives`} className='close' cover bg="#F408F4" direction="down">
                    <img src='/Close.svg' alt='Close button' />
                </AniLink>

                <div className="arrow">
                    <div className='back' >
                        {prev &&
                            <AniLink to={`/counternarratives/${prev.slug.current}`} direction="right" className='back' cover bg="#F408F4">
                                <img src='/back.png' alt='Back button' />
                            </AniLink>
                        }
                    </div>
                    <div className='next'>
                        {next &&
                            <AniLink to={`/counternarratives/${next.slug.current}`} direction="left" className='next' cover bg="#F408F4">
                                <img src='/Next.png' alt='Next button' />
                            </AniLink>
                        }
                    </div>
                </div>
                <div className="grid">
                        <h1>{counter.title}</h1>
                        <div className="textoooo">
                            <div className="bar"></div>
                            <div className='share'>
                                <p>Share:</p>
                                <a target='_blank' rel="noreferrer" href={`http://twitter.com/share?text=${counter.title}&url=${pathLink}`}>Twitter</a>
                                <a target='_blank' rel="noreferrer" href={`https://www.facebook.com/dialog/feed?&app_id=440357587784784&link=${pathLink}&display=popup&quote=${counter.title}`} >Facebook</a>
                                <a target='_blank' rel="noreferrer" href={`mailto:?subject=${counter.title}&body=Check out this website %0D %0D ${pathLink} %0D%0D`} >Mail</a>
                            </div>
                            <div className='team'>
                                <p>TEAM:</p>
                                <p>{counter.theTeam}</p>
                            </div>
                            <div className='body'>
                                <div className="scroll">
                                    <BlockContent
                                        blocks={counter._rawProjectDescription}
                                    />
                                </div>
                            </div>
                        </div>
                        {counter.vimeoId ? 

                            <div className='playerVideo'>
                                    <div className="video">
                                        {Parser(video)}
                                    </div>
                            </div>
                            :
                            <div className='playerImage'>

                                <div className="image">
                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%" }}
                                        image={bgGetDataImage}
                                        alt={bgGetDataImageAlt}
                                    />
                                </div>
                            </div>
                        }
                </div>
            </div>
        </SingleCountProjContainer>
      </Layout>
    )
}


const SingleCountProjContainer = styled.div`
height: 100vh;
width: 100vw;
img.bg {
    position: fixed;
    width: 100%;
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
    transition: top 350ms ease-in-out;
    z-index: 4;
    display: block;
    grid-template-columns: repeat(10, 1fr);
    color: white;
    background: linear-gradient(180deg, rgba(241, 115, 56, 0.7) 80.48%, rgba(243, 13, 243, 0.681771) 100%);
    backdrop-filter: blur(20px);
    @media (max-width: 650px) {
        background: linear-gradient(180deg, rgba(243, 155, 114, 0.7) 80.48%, rgba(244, 89, 242, 0.681771) 100%);
        padding: 0;
    }
    .arrow {
        position: absolute;
        top: 100px;
        right: 0;
        width: 65%;
        height: 100%;
        display: flex;
        z-index: 2;
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
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            a {
                position: absolute;
                width: 100%;
                height: 100%;
                cursor: url(${arrowNext}) 10 10, auto;
            }
        }
        .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            a {
                position: absolute;
                width: 100%;
                height: 100%;
                cursor: url(${arrowPrev}) 10 10, auto;
            }
        }
    }
    a.close {
        position: fixed;
        top: 50px;
        right: 50px;
        @media (max-width: 650px) {
            right: 50px;
            bottom: 45px;
            top: auto;
            width: 40px;
            height: 40px;
            z-index: 6;
        }
        img {
            width: 20px;
            height: 20px;
        }
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        h1 {
            grid-column: 1/5;
            padding: 45px 0 0 50px;
            @media (max-width: 850px) {
                grid-column: 1/6;
            }
        }
        .playerVideo {
            grid-column: 4/11;
            align-self: baseline;
            margin-top: 0;
            text-align: center;
            position: relative;
            z-index: 2;
            @media (max-width: 850px) {
                grid-column: 6/11;
            }
            @media (max-width: 650px) {
                display: none;
            }
            .video {
                position: relative;
                padding:56.25% 50px 0 50px;
                iframe {
                    width: 90% !important;
                    margin-left: 50px;
                }
            }   
        }
        .playerImage {
            grid-column: 4/11;
            grid-row: 2/3;
            align-self: baseline;
            margin-top: 0;
            text-align: center;
            position: relative;
            z-index: 1;
            max-height: 80vh;
            height: 100%;
            padding: 0 50px 50px 50px;
            overflow: hidden;
            @media (max-width: 850px) {
                grid-column: 6/11;
            }
            @media (max-width: 650px) {
                display: none;
            }
            .image {
                height: 100%;
                width: 100%;
            }
        }
        .textoooo {
            padding: 0 0 50px 50px;
            grid-column: 1/4;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            position: relative;
            @media (max-width: 850px) {
                grid-column: 1/6;
                padding-left: 0 ;
            }
            .bar {
                position: absolute;
                bottom: 25px;  
                left: -100px;
                z-index: 2;
                height: 50px;
                background-color: #F54BF5;
                opacity: 1;
                filter: blur(20px);
                width: 5000px;    
                pointer-events: none; /* so the text is still selectable */
                @media (max-width: 650px) {
                    display: none;
                    bottom: 60px;
                    filter: blur(15px);
                }
            }
            
        }
        
        @media (max-width: 850px) {
            grid-column: 1/6;
            padding: 20px;
        }
        @media (max-width: 650px) {
            grid-column: 1/11;
            height: 100vh;
            display: flex;
            flex-direction: column;
            z-index: 5;
            h1 {
                grid-row: 1/2;
                padding: 20px 20px 10px;
                margin-bottom: 0 !important;
                word-break: break-word;
                text-transform: uppercase;
            }
            .body {
                grid-row: 2/3;
                overflow-y: scroll;
                margin-top: 0 !important;
                padding: 0px 20px 0px;
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
            .share {
                grid-row: 4/5;
                position: fixed;
                bottom: 40px;
                margin: 0 !important;
                padding: 0 20px ;
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
            position: relative;
            margin-top: 20px;
            div {
                padding-bottom: 100px;
            }
            .scroll {
                overflow-x: scroll;
                height: calc(75vh - 155px);
                @media (max-width: 650px) {
                    height: calc(65vh - 155px);
                }
            }
            p {
                margin: 10px 0;
            }
        }
        
    }


}
a {
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
                div {
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
}
`



export default SingleCounterProject;