import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import HeroFictions from '../components/fictions/HeroFictions';



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
    sanityFictionsPage {
        title
        descriptionFictions
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
    allSanityFiction {
        edges {
            node {
                _id
                title
                slug {
                    current
                }
                credits
                _rawProjectDescription
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
            }
        }
    }
    
  }
`;





const FictionsPage = ({data}) => {

    const pink = 'var(--white)'

    return(
        <Layout pink={pink}>
            <Seo title={data.sanityFictionsPage.seo.title} description={data.sanityFictionsPage.seo.description} image={data.sanityFictionsPage.seo.image.asset.url} />
            <HeroFictions data={data} />
        </Layout>
    )
}

export default FictionsPage