import React from 'react'
import Landing from '../components/landing/Landing'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

const SplashPage = () => {
    return(
        <Layout>
            <Seo title='WEBSITE COMING SOON' description='Dreaming in LA, Exploring in CDMX, Wandering in MADRID' image='../assets/images/screenshot.png' />
            <Landing />
        </Layout>
    )
}

export default SplashPage