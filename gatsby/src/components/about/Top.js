import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const Top = ({data}) => {
    return(
        <CountProjContainer>
            <div className='iz'>
                <h1>{data.sanityAboutPage.title}</h1>
                <div className='body'>
                    <BlockContent
                        blocks={data.sanityAboutPage._rawDescriptionAbout}
                    />
                </div>
            </div>
            <div className='mid'>
                <h2>{data.sanityAboutPage.titleFounding}</h2>
                <div className='body'>
                    <BlockContent
                        blocks={data.sanityAboutPage._rawDescriptionFounding}
                    />
                </div>
            </div>
            <div className='de'>
                <h2>{data.sanityAboutPage.titleAllies}</h2>
                <div className='body'>
                    <BlockContent
                        blocks={data.sanityAboutPage._rawDescriptionAllies}
                    />
                </div>
            </div>
        </CountProjContainer>
    )
}


const CountProjContainer = styled.section`
    margin-top: 250px;
    position: relative;
    display: flex;
    .iz, .mid {
        width: 40%;
        padding: 0 50px 0 0;
    }
    .mid {
        padding: 0 50px;
    }
    .de {
        padding-left: 50px;
    }

    h1, h2 {
        font-size: 3rem;
        margin-bottom: 50px;
        text-transform: uppercase;
    }
    .body {
        height: 300px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: 850px) {
        margin-top: 50px;
    }
`


export default Top