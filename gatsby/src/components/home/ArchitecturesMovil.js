import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const ArchitecturesMovil = ({data}) => {
    return(
        <ArchitecturesContainer>
            <div className='container'>
            {data.allSanityArchitecture.nodes.map(({ _id, locationMovil, title, slug, yearMovil, sliderImages }) => {
                    return (
                        <div className='project' key={_id}>
                            <div className='slider'>
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
                            <div className='info'>
                                <div className='arriba'>
                                    <p>{locationMovil}</p>
                                    <p>{yearMovil}</p>
                                </div>
                                <div className='titulo'>
                                    <h2>{title}</h2>
                                </div>
                                <div className='more'>
                                    <Link to={`/${slug.current}`}>+ Info</Link>
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
        .project {
            position: relative;
            margin-bottom: 50px;
            padding-left: 20px;
            .info {
                margin-top: 50px;
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
                overflow-x: scroll;
                overflow-y: hidden;
                white-space:nowrap;
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