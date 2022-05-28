import React from 'react'
import Blur from '../components/home/Blur';
import { graphql } from "gatsby";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import ProjectsHome from '../components/home/ProjectsHome';


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
  }
`;




const IndexPage = ({data}) => {
    return(
        <Layout>
            <Seo title='Inicio' description='descripción' image='../assets/images/screenshot.png' />
            <Blur data={data} />
            <ProjectsHome data={data} />
        </Layout>
    )
}

export default IndexPage