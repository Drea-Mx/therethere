import React from 'react'
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
    }
    allSanityArchitecture {
        nodes {
            _id
            title
            slug {
                current
            }
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
        }
    }
  }
`;




const IndexPage = ({data}) => {
    return(
        <Layout>
            <Seo title='Inicio' description='descripción' image='../assets/images/screenshot.png' />
            <Blur data={data} />
            <HeroHome data={data} />
        </Layout>
    )
}

export default IndexPage