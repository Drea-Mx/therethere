import React from 'react'
import styled from 'styled-components'

const Bot = ({data}) => {
    return(
        <CountProjContainer>
            <div className='iz'>
                <h2 className='titlee'>{data.sanityAboutPage.awardsTitle}</h2>
                <div className='loop'>
                    {data.sanityAboutPage.awards.map(({ _key, title, award, subtitle, url }) => {
                        return (
                            <a className='item' key={_key} href={url} target='_blank' rel="noreferrer">
                                <h2>{title}</h2>
                                <h2>{award}</h2>
                                <p>{subtitle}</p>
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className='de'>
                <h2 className='titlee'>{data.sanityAboutPage.newsTitle}</h2>
                <div className='loop'>
                    {data.sanityAboutPage.new.map(({ _key, title, subtitle, url }) => {
                        return (
                            <a className='item' key={_key} href={url} target='_blank' rel="noreferrer">
                                <h3>{title}</h3>
                                <h3>{subtitle}</h3>
                                <p>Learn More</p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </CountProjContainer>
    )
}


const CountProjContainer = styled.section`
    margin-top: 50px;
    margin-bottom: 100px;
    position: relative;
    display: flex;
    @media (max-width: 850px) {
        flex-direction: column;
        margin-top: 0 !important;
        margin-bottom: 0; 
        padding-bottom: 100px;
        .item {
            width: 100% !important;
            padding: 20px !important;
        }
    }
    .titlee {
        font-size: 3rem;
        margin-bottom: 50px;
        @media (max-width: 850px) {
            padding: 20px 20px 0;
            margin-bottom: 20px;
        }
    }
    .iz {
        width: 50%;
        padding-right: 50px;
        @media (max-width: 850px) {
            width: 100%;
        }
        .loop {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: row dense;
            @media (max-width: 850px) {
                grid-template-columns: 1fr;
            }
            .item {
                margin-bottom: 30px;
                display: block;
                padding-right: 20px;
                @media (max-width: 850px) {
                    margin-right: 0;
                    margin-bottom: 15px;
                    padding: 0 20px !important;
                }
                h2 {
                    font-size: 1.5rem;
                }
            }
        }
    }
    .de {
        width: 50%;
        padding-left: 50px;
        @media (max-width: 850px) {
            padding-left: 0;
            width: 100%;
        }
        .loop {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: row dense;
            @media (max-width: 850px) {
                grid-template-columns: 1fr;
            }
            .item {
                margin-bottom: 30px;
                display: block;
                padding-right: 20px;
                @media (max-width: 850px) {
                    margin-bottom: 0;
                    padding-bottom: 0px !important;
                }
                h3 {
                    margin-bottom: 5px;
                }
                p {
                    color: rgba(255, 135, 255, 1);
                }
            }
        }
    }
`


export default Bot