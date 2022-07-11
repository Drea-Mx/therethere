import React, { useEffect, useState } from "react";
import Blur from '../components/home/Blur';
import { graphql } from "gatsby";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import HeroHome from '../components/home/HeroHome';

export const data = graphql`
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
                placeholder: DOMINANT_COLOR
                )
            }
        }
        logoSansSerif {
            alt
            asset {
                gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: DOMINANT_COLOR
                )
            }
        }
        logoSerif {
        alt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
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
    allSanityArchitecture(sort: {order: ASC, fields: orderRank})  {
        nodes {
            _id
            title
            slug {
                current
            }
            yearMovil
            locationMovil
            thumbnailMetadescription
            thumbnail {
                alt
                asset {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                )
                }
            }
            sliderImages {
                _key
                alt
                asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
        }
    }
  }
`;




const IndexPage = ({data}) => {


    const session = "test";
    const [showModal, setShowModal] = useState(false);
    
    const hideModal = () => {
      console.log("hideModal");
      const modalKey = "modalSession";
      localStorage.setItem(modalKey, session);
      setShowModal(false);
    };

    useEffect(() => {
      const modalKey = "modalSession";
      const modalSession = localStorage.getItem(modalKey);
      setShowModal(modalSession !== session);
    },[showModal, hideModal]);




    return(
        <Layout>
            <Seo title={data.sanityHomePage.seo.title} description={data.sanityHomePage.seo.description} image={data.sanityHomePage.seo.image.asset.url} />
            {showModal ? 
                <Blur data={data} />
            : ""}
            <HeroHome data={data} />
        </Layout>
    )
}

export default IndexPage