import React from 'react'
import styled from 'styled-components'
import SingleFictionsProj from './SingleFictionsProj'

const FictionsProj = ({data}) => {
    return(
        <FictionsProjContainer>
            <div className='container'>
            {data.allSanityFiction.edges.map(({ node }) => {
        
                    return (
                        <SingleFictionsProj node={node} />
                    );
                })}
            </div>
        </FictionsProjContainer>
    )
}


const FictionsProjContainer = styled.section`
    margin-top: 320px;
    position: relative;
    @media (max-width: 850px) {
            margin-top: 50px;
        }
    .container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
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
            &:nth-child(3n -2) {
                grid-column: 2 / span 2;
                grid-row: auto;
            }
            &:nth-child(3n -1) {
                grid-column: 5 / span 2;
                grid-row: auto;
            }
            &:nth-child(3n) {
                grid-column: 8 / span 2;
                grid-row: auto;
            }
        }
    }
`


export default FictionsProj