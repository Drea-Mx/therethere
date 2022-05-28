import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Architectures from './Architectures'

const HeroHome = ({data}) => {

    const bgGetDataImage = getImage(data.sanitySettingsPage.logos.asset)
    const bgGetDataImageAlt = data.sanitySettingsPage.logos.alt



    return(
        <ProjectsHomeCoontainer id='top'>
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
                <Projects data={data} />
                <div className='top'>
                    <div className='overlay'></div>
                    <a href='#top'>Back to top</a>
                </div>
            </div>
        </ProjectsHomeCoontainer>
    )
}

const ProjectsHomeCoontainer = styled.section`
padding: 50px;
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
            left: 50px;
        }
        .floatR {
            position: fixed;
            top: 20px;
            right: 50px;
        }
        .logos {
            position: fixed;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            max-width: 750px;
            width: 750px;
            z-index: 4;
            .logo {
                width: 100%;
            }
        }
        .title {
            display: flex;
            position: fixed;
            top: 250px;
            left: 50px;
            h1 {
                text-transform: uppercase;
                font-weight: normal;
            }
            p {
                margin-left: 20px;
                align-self: center;
            }
        }
        .top {
            position: relative;
            margin: 0 auto;
            width: 150px;
            height: 50px;
            .overlay {
                text-align: center;
                margin: 0 auto;
                width: 100px;
                background-color: pink;
                background-image: linear-gradient(rgba(244, 8, 244, .5), rgba(244, 8, 244, .5));
                filter: blur(15px);
                height: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-radius: 25px;
            }
            a {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                width: 180px;
            }
        }
    }

`


const Projects = styled(Architectures)`
    position: relative;
    z-index: 3;
`

export default HeroHome