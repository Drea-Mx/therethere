import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const ThreeColumn = ({data}) => {
    const bgGetDataImage1 = getImage(data.image1.asset)
    const bgGetDataImageAlt1 = data.image1.alt

    const bgGetDataImage2 = getImage(data.image2.asset)
    const bgGetDataImageAlt2 = data.image2.alt

    const bgGetDataImage3 = getImage(data.image3.asset)
    const bgGetDataImageAlt3 = data.image3.alt


    const TwoColumnContainer = styled.section`
    margin: 150px 0;
    .twoColumn {
        width: 80%;
        margin: 0 auto;
        .images {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 10px;
            .image {
                width: 100%;
                height: 100%;
                justify-self: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
`

    return(
        <TwoColumnContainer>
            <div className='twoColumn' >
                <div className='images'>
                    <div className='image'>
                        <GatsbyImage
                            image={bgGetDataImage1}
                            alt={bgGetDataImageAlt1}
                        />
                    </div>
                    <div className='image'>
                        <GatsbyImage
                            image={bgGetDataImage2}
                            alt={bgGetDataImageAlt2}
                        />
                    </div>
                    <div className='image'>
                        <GatsbyImage
                            image={bgGetDataImage3}
                            alt={bgGetDataImageAlt3}
                        />
                    </div>
                </div>
            </div>
        </TwoColumnContainer>
    )
}



export default ThreeColumn