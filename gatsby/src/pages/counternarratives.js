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
    allSanityCounterNarrative(sort: {order: ASC, fields: orderRank})  {
        edges {
            node {
                _id
                title
                slug {
                    current
                }
                theTeam
                city
                year
                _rawProjectDescription
                vimeoId
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





const CounternarrativesPage = ({data}) => {

    const pink = 'var(--pink)'

    return(
        <Layout pink={pink}>
            <Seo title={data.sanityCounterNarrativesPage.seo.title} description={data.sanityCounterNarrativesPage.seo.description} image={data.sanityCounterNarrativesPage.seo.image.asset.url} />
            <HeroCounternarratives data={data} />
        </Layout>
    )
}

export default CounternarrativesPage