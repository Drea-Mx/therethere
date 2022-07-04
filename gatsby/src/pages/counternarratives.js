import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import HeroCounternarratives from '../components/counternarratives/HeroCounternarratives';



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
    sanityCounterNarrativesPage {
        title
        descriptionCounterNarratives
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
    allSanityCounterNarrative {
        nodes {
            _id
            title
            slug {
                current
            }
            metaInfo
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





const CounternarrativesPage = ({data}) => {

    const pink = true

    return(
        <Layout pink={pink}>
            <Seo title={data.sanityCounterNarrativesPage.seo.title} description={data.sanityCounterNarrativesPage.seo.description} image={data.sanityCounterNarrativesPage.seo.image.asset.url} />
            <HeroCounternarratives data={data} />
        </Layout>
    )
}

export default CounternarrativesPage