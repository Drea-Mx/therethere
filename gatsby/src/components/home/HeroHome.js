import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Architectures from './Architectures'
import ArchitecturesMovil from './ArchitecturesMovil'

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
                <ProjectsMovil data={data} />
                <div className='top'>
                    <div className='overlay'></div>
                    <a href='#top'>Back to top</a>
                </div>
            </div>
        </ProjectsHomeCoontainer>
    )
}

const ProjectsHomeCoontainer = styled.section`
padding: 20px;
position: relative;
z-index: 1;
@media (max-width: 850px) {
    padding: 0;
}
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
            @media (max-width: 850px) {
                display: none;
            }
        }
        .floatR {
            position: fixed;
            top: 20px;
            right: 20px;
            @media (max-width: 850px) {
                display: none;
            }
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
            @media (max-width: 850px) {
                position: static;
                width: 266px;
                margin: 0 auto;
                transform: none;
                padding-top: 50px;
            }
            .logo {
                width: 100%;
            }
        }
        .title {
            display: flex;
            position: fixed;
            top: 250px;
            left: 20px;
            @media (max-width: 850px) {
                position: static;
                margin-top: 50px;
                flex-direction: column;
                padding-left: 20px;
            }
            h1 {
                text-transform: uppercase;
                font-weight: normal;
                @media (max-width: 850px) {
                    font-size: 2rem;
                }
            }
            p {
                margin-left: 50px;
                align-self: center;
                @media (max-width: 850px) {
                    margin-left: 0;
                    align-self: flex-start;
                    margin-top: 10px;
                    width: 70%;
                }
            }
        }
        .top {
            position: relative;
            text-align: center;
            margin: 0 auto;
            width: 250px;
            height: 50px;
            @media (max-width: 850px) {
                margin-bottom: 100px;
            }
            @media (max-width: 650px) {
                display: none;
            }
            .overlay {
                margin: 0 auto;
                width: 220px;
                background-image: linear-gradient(rgba(244, 8, 244, .5), rgba(244, 8, 244, .5));
                filter: blur(20px);
                height: 80px;
                border-radius: 40px;
            }
            a {
                position: absolute;
                display: block;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                margin: 15px auto 0;
                width: 200px;
                transition: color 150ms ease-in-out;
                text-transform: uppercase;
                font-size: 30px;
                &:hover {
                    color: #F9F9F9;
                }
            }
        }
    }

`


const Projects = styled(Architectures)`
    position: relative;
    z-index: 3;
`

const ProjectsMovil = styled(ArchitecturesMovil)`
    position: relative;
    z-index: 1;
`

export default HeroHome