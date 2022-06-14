import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const OneColumn = ({data}) => {
    const bgGetDataImage = getImage(data.image.asset)
    const bgGetDataImageAlt = data.image.alt


    const OneColumnContainer = styled.section`
    .oneColumn {
        width: 80%;
        margin: 0 auto;
    }
    .true {
        width: 50%;
    }
`

    return(
        <OneColumnContainer>
            <div className={`oneColumn ${data.fullWidth}`} >
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                </div>
            </div>
        </OneColumnContainer>
    )
}



export default OneColumn
