import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const CountProj = ({data}) => {
    return(
        <CountProjContainer>
            <div className='container'>
            {data.allSanityCounterNarrative.nodes.map(({ _id, thumbnail, title, slug, metaInfo }) => {
                            const bgGetDataImage = getImage(thumbnail.asset)
                            const bgGetDataImageAlt = thumbnail.alt
                    return (
                        <div className='project' key={_id}>
                            <Link to={`/${slug.current}`}>
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
                                
                            </Link>
                        </div>
                    );
                })}
            </div>
        </CountProjContainer>
    )
}


const CountProjContainer = styled.section`
    margin-top: 320px;
    position: relative;
    .container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 100px;
        margin-bottom: 100px;
        .project  {
            white-space:nowrap;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            a {
                &:hover {
                    .image {
                        .cont {
                            opacity: 1;
                        }
                    }
                }
                .image {
                    position: relative;
                    .cont {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        backdrop-filter: blur(10px);
                        opacity: 0;
                        transition: opacity 350ms ease-in-out;
                        .text {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            padding: 20px;
                            text-align: center;
                        }
                    }
                }
            }
            
            &:nth-child(3n - 2) {
                grid-column: 1/span 5;
                grid-row: auto;
                .overlay {
                    background-image: linear-gradient(rgba(241, 115, 56, .5), rgba(244, 8, 244, .5));
                }
            }
            &:nth-child(3n - 1) {
                grid-column: 6/span 10;
                grid-row: auto;
                .overlay {
                    background-image: linear-gradient(rgba(241, 115, 56, .5), rgba(244, 8, 244, .5));
                }
            }
            &:nth-child(3n) {
                grid-column: 2/span 8;
                grid-row: auto;
                .overlay {
                    background-image: linear-gradient(rgba(241, 115, 56, .5), rgba(244, 8, 244, .5));
                }
            }
        }
    }
`


export default CountProj