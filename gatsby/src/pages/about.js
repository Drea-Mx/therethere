import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import HeroAbout from '../components/about/HeroAbout';



export const data = graphql`
  query {
    sanitySettingsPage {
        email
        downloadsCV {
            asset {
                url
            }
        }
        vimeo
        instagramUrl
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
    }
    sanityAboutPage {
        title
        _rawDescriptionAbout
        titleFounding
        _rawDescriptionFounding
        titleAllies
        _rawDescriptionAllies
        awardsTitle
        awards {
            _key
            title
            award
            subtitle
            url
        }
        newsTitle
        new {
            _key
            title
            subtitle
            url
        }
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
`;





const AboutPage = ({data}) => {

    const pink = 'var(--black)'

    const black = true

    return(
        <Layout pink={pink} black={black} >
            <Seo title={data.sanityAboutPage.seo.title} description={data.sanityAboutPage.seo.description} image={data.sanityAboutPage.seo.image.asset.url} />
            <HeroAbout data={data} />
        </Layout>
    )
}

export default AboutPage