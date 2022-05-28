import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsHome = ({data}) => {

    const bgGetDataImage = getImage(data.sanitySettingsPage.logos.asset)
    const bgGetDataImageAlt = data.sanitySettingsPage.logos.alt



    return(
        <ProjectsHomeCoontainer>
            <div className="container">
                <h2 className='floatL'>{data.sanitySettingsPage.headerTitle1}</h2>
                <h2 className='floatR'>{data.sanitySettingsPage.headerTitle2}</h2>
                <div className='logos'>
                    <div className='logo'>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage}
                            alt={bgGetDataImageAlt}
                        />
                    </div>
                </div>
                <div className='title'>
                    <h1>{data.sanityHomePage.title}</h1>
                    <p>{data.sanityHomePage.subTitle}</p>
                </div>
            </div>
        </ProjectsHomeCoontainer>
    )
}

const ProjectsHomeCoontainer = styled.section`
padding: 20px;
position: relative;
z-index: 1;
    .container {
        position: relative;
        width: 100%;
        h2 {
            font-size: 1rem;
        }
        .floatL {
            position: fixed;
            top: 20px;
            left: 20px;
        }
        .floatR {
            position: fixed;
            top: 20px;
            right: 20px;
        }
        .logos {
            position: fixed;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            max-width: 750px;
            width: 750px;
            .logo {
                width: 100%;
            }
        }
        .title {
            display: flex;
            position: fixed;
            top: 250px;
            left: 20px;
            h1 {
                text-transform: uppercase;
                font-weight: normal;
            }
            p {
                margin-left: 20px;
                align-self: center;
            }
        }
    }

`

export default ProjectsHome