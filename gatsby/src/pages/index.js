import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import HeroHome from '../components/home/HeroHome';
import Blurr from "../components/home/Blurr";





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
                    placeholder: BLURRED
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
                        placeholder: BLURRED
                    )
                }
            }
        }
    }
  }
`;




const IndexPage = ({data}) => {

    const pink = 'var(--white)'
    return(
        <Layout pink={pink}>
            <Seo title={data.sanityHomePage.seo.title} description={data.sanityHomePage.seo.description} image={data.sanityHomePage.seo.image.asset.url} />
            <Blurr />
            <HeroHome data={data} />
        </Layout>
    )
}

export default IndexPage