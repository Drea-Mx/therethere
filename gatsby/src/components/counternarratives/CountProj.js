import React from 'react'
import styled from 'styled-components'
import SingleCountProj from './SingleCountProj'

const CountProj = ({data}) => {
    return(
        <CountProjContainer>
            <div className='container'>
            {data.allSanityCounterNarrative.edges.map(({ node }) => {
        
                    return (
                        <SingleCountProj node={node} />
                    );
                })}
            </div>
        </CountProjContainer>
    )
}


const CountProjContainer = styled.section`
    margin-top: 320px;
    position: relative;
    @media (max-width: 850px) {
            margin-top: 50px;
        }
    .container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 100px;
        margin-bottom: 100px;
        @media (max-width: 850px) {
            display: block;
            margin-bottom: 0;
            padding-bottom: 50px;
        }
        .project  {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
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