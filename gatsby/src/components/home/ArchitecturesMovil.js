import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ArchitecturesMovil = ({data}) => {
    return(
        <ArchitecturesContainer>
            <div className='container'>
            {data.allSanityArchitecture.nodes.map(({ _id, locationMovil, title, slug, yearMovil, sliderImages }) => {
                    return (
                        <div className='project' key={_id}>
                            <div className='slider'>
                                <div className='bar'></div>
                                <div className='container'>
                                    {sliderImages.map(({ _key, alt, asset }) => {
                                                const bgGetDataSlide = getImage(asset)
                                                const bgGetDataSlideAlt = alt
                                        return (
                                            <div className='image' key={_key}>
                                                <GatsbyImage
                                                    style={{ height: "100%", width: "100%" }}
                                                    image={bgGetDataSlide}
                                                    alt={bgGetDataSlideAlt}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                
                            </div>
                            <div className='info'>
                                <div className='arriba'>
                                    <p>{locationMovil}</p>
                                    <p>{yearMovil}</p>
                                </div>
                                <div className='titulo'>
                                    <h2>{title}</h2>
                                </div>
                                <div className='more'>
                                    <AniLink 
                                        cover 
                                        bg="#F408F4"
                                        direction="up" to={`/${slug.current}`}>
                                            + Info
                                    </AniLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </ArchitecturesContainer>
    )
}

const ArchitecturesContainer = styled.section`
    margin-top: 20px;
    position: relative;
    display: none;
    @media (max-width: 680px) {
        display: block;
    }
    .container {
        padding-bottom: 50px;
        .project {
            position: relative;
            margin-bottom: 70px;
            padding-left: 20px;
            .info {
                margin-top: 10px;
                .arriba {
                    padding-right: 50px;
                    display: flex;
                    justify-content: space-between;
                    p {
                        text-transform: uppercase;
                    }
                }
                .titulo {
                    h2 {
                        text-transform: uppercase;
                        font-size: 2rem;
                        margin-top: 5px;
                        padding-right: 20px;
                        margin-bottom: 5px;
                        width: 90%;
                        word-break: break-word;
                    }
                }
                .more {
                    a {
                        font-size: 1.2rem;
                        text-transform: uppercase;
                    }
                }
            }
            .slider {
                position: relative;
                .container {
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space:nowrap;
                }
                .bar {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 50px;
                    background: linear-gradient(to right, transparent, #f9f9f9);
                    z-index: 1;
                }
                &::-webkit-scrollbar {
                    display: none;
                }
                .image {
                    width: 90%;
                    height: auto;
                    display:inline-block;
                    zoom:1;/* For IE7*/
                    vertical-align:middle ;
                    padding-right: 20px;
                }
            }
            
            
        }
    }
`

export default ArchitecturesMovil