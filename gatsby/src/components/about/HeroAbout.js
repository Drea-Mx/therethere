import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Top from './Top'
import Bot from './Bot'
import { Link } from 'gatsby'

const HeroAbout = ({data}) => {

    const bgGetDataImage = getImage(data.sanitySettingsPage.logos.asset)
    const bgGetDataImageAlt = data.sanitySettingsPage.logos.alt



    return(
        <ProjectsAboutCoontainer id='top'>
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
                <div className='fixed'>
                    <div className='lef'>
                        <a href={`mailto:${data.sanitySettingsPage.email}`}>E-Mail</a>
                        <a download href={data.sanitySettingsPage.downloadsCV.asset.url}>Download CV</a>
                        <a href={data.sanitySettingsPage.vimeo} rel="noreferrer" target='_blank' >Vimeo</a>
                        <a href={data.sanitySettingsPage.instagramUrl} rel="noreferrer" target='_blank' >Instagram</a>
                    </div>
                    <div className='rig'>
                        
                        <Link to='/about#top'>About</Link>
                        <Link to='/about#founding'>FOUNDING PRINCIPAL</Link>
                        <Link to='/about#allies'>ALLIES</Link>
                        <Link to='/about#awards'>Awards</Link>
                        <Link to='/about#news'>News</Link>
                    </div>
                </div>
                <Top data={data} />
                <Bot data={data} />
                <div className='top'>
                    <div className='overlay'></div>
                    <a href='#top'>Back to top</a>
                </div>
            </div>
        </ProjectsAboutCoontainer>
    )
}

const ProjectsAboutCoontainer = styled.section`
padding: 50px;
position: relative;
z-index: 1;
background-color: var(--black);
color: var(--pink);
@media (max-width: 850px) {
    padding: 0;
}

    .container {
        position: relative;
        width: 100%;
        .fixed {
            position: fixed;
            bottom: 50px;
            padding: 20px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            z-index: 5;
            background-color: var(--black);
            @media (max-width:850px) {
                    height: 75px;
                }
            a {
                text-transform: uppercase;
            }
            .lef {
                padding-left: 50px;
                @media (max-width:850px) {
                    position: absolute;
                    bottom: 10px;
                    width: 100%;
                    text-align: center;
                    padding-left: 0;
                }
                a {
                    margin-right: 20px;
                }
            }
            .rig {
                padding-right: 50px;

                @media (max-width:850px) {
                    padding-right: 0;
                    width: 80%;
                    margin: 0 auto;
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    justify-self: center;
                }
                a {
                    margin-left: 20px;
                    
                }
            }
        }
        .floatL {
            position: fixed;
            top: 20px;
            left: 50px;
            font-size: 1rem;
            @media (max-width: 850px) {
                display: none;
            }
        }
        .floatR {
            position: fixed;
            top: 20px;
            right: 50px;
            font-size: 1rem;
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
            left: 50px;
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
            margin: 0 auto;
            width: 150px;
            height: 50px;
            @media (max-width: 850px) {
                padding-bottom: 100px;
            }
            @media (max-width: 650px) {
                display: none;
            }
            .overlay {
                text-align: center;
                margin: 0 auto;
                width: 100px;
                background-color: pink;
                background-image: linear-gradient(rgba(244, 8, 244, .8), rgba(244, 8, 244, .8));
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
                text-transform: uppercase;
                transition: color 150ms ease-in-out;
                &:hover {
                    color: #F9F9F9;
                }
            }
        }
    }

`


// const Projects = styled(Architectures)`
//     position: relative;
//     z-index: 3;
// `

// const ProjectsMovil = styled(ArchitecturesMovil)`
//     position: relative;
//     z-index: 1;
// `

export default HeroAbout