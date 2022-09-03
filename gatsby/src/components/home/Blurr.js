import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';
import { useStaticQuery, graphql } from "gatsby";


const useSessionModal = () => {
    const session = "test";
    const [showModal, setShowModal] = useState(false);
    const hideModal = () => {
      const modalKey = "modalSession";
      localStorage.setItem(modalKey, session);
      setShowModal(false);
    };
    useEffect(() => {
      const modalKey = "modalSession";
      const modalSession = localStorage.getItem(modalKey);
      setShowModal(modalSession !== session);
    },[]);
    return [showModal, hideModal];
  };


const Blurr = () => {

    const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            headerTitle1
            headerTitle2
            logos {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: BLURRED
                    )
                }
            }
            logoSansSerif {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: BLURRED
                    )
                }
            }
            logoSerif {
            alt
            asset {
                gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: BLURRED
                )
            }
            }
        }
        sanityHomePage {
            _rawDescriptionHome
            title
            subTitle
            seo {
                title
                description
                image {
                    asset {
                    url
                    }
                }
            }
        }
    }
    `);
    




    const bgGetDataImage1 = getImage(data.sanitySettingsPage.logoSansSerif.asset)
    const bgGetDataImageAlt1 = data.sanitySettingsPage.logoSansSerif.alt

    const bgGetDataImage2 = getImage(data.sanitySettingsPage.logoSerif.asset)
    const bgGetDataImageAlt2 = data.sanitySettingsPage.logoSerif.alt


    const [clickLogo, setClickLogo] = useState(false);



    const [showModal, hideModal] = useSessionModal();


    document.cookie = "showedModal=showedModal; path=/";




    useEffect(() => {
        const onScroll = () => hideModal(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [hideModal]);



    return(
        <BlurContainer >

            <div className={showModal ? 'container' : 'top container'}>
                <div className='overlay'></div>
                <div className='text'>
                    <BlockContent
                        blocks={data.sanityHomePage._rawDescriptionHome}
                    />
                </div>
                <div className={clickLogo ? 'logos1 element active' : 'logos1 element'}>
                    <button className='image1 image'
                        onClick={() => setClickLogo(!clickLogo)}
                    >
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage1}
                            alt={bgGetDataImageAlt1}
                        />
                    </button>
                    <button className='image2 image'
                        onClick={() => setClickLogo(!clickLogo)}
                    >
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={bgGetDataImage2}
                            alt={bgGetDataImageAlt2}
                        />
                    </button>
                    <button className="arrow"
                        onClick={hideModal}
                    >
                        <img src='/arrowDown.svg' alt='Arrow Down Button' />
                    </button>
                </div>
            </div>

        </BlurContainer>
    )
}

const BlurContainer = styled.section`
.top {
    top: -100% !important;
    opacity: 0 !important;
}
.container {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    opacity: 1;
    transition: opacity 1s ease-in-out, top 1s ease-in-out 1s;
    z-index: 3;
    .text {
        position: absolute;
        width: 100%;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        text-align: center;
        @media (max-width: 680px) {
            top: 45%;
        }
        p {
            line-height: 1.5;
        }
    }
    .arrow {
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        animation: arrow 1s ease-in-out infinite forwards;
        @media (max-width: 680px) {
            bottom: 30px;
            animation: arrowM 1s ease-in-out infinite forwards;
        }
    }
    @keyframes arrow {
        0% {
            bottom: 80px;
        }
        50% {
            bottom: 100px;
        }
        100% {
            bottom: 80px
        }
    }
    @keyframes arrowM {
        0% {
            bottom: 30px;
        }
        50% {
            bottom: 50px;
        }
        100% {
            bottom: 30px
        }
    }
    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        background: rgba(255,255,255,0.5);
        backdrop-filter: blur(10px);
        z-index: 2;
        @media (max-width: 680px) {
            background: rgba(255,255,255,0.6);
            backdrop-filter: blur(10px);
        }
    }
   
        
        /* .logos1 ~ div {

        } */
    .logos1.active {
        .image1 {
            width: 30%;
            position: absolute;
            right: 40px;
            bottom: 80px;
            top: auto;
            left: auto;
            @media (max-width: 680px) {
                width: 65%;
                right: auto !important;
                left: 50% !important;
                transform: translateX(-50%);
                bottom: 150px;
            }
        }
        .image2 {
            width: 30%;
            position: absolute;
            top: 80px;
            left: 40px;
            right: auto;
            bottom: auto;
            @media (max-width: 680px) {
                width: 65%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
    .logos1 {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
        .image1 {
            width: 30%;
            position: absolute;
            top: 80px;
            left: 40px;
            @media (max-width: 680px) {
                width: 65%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .image2 {
            width: 30%;
            position: absolute;
            right: 40px;
            bottom: 80px;
            @media (max-width: 680px) {
                width: 65%;
                right: auto !important;
                left: 50% !important;
                transform: translateX(-50%);
                bottom: 150px;
            }
        }
    }
}
`


export default Blurr