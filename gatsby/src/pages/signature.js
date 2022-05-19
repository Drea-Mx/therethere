import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'

const SignaturePage = () => {
    return(
        <Layout>
            <Seo title='Signature' description='Dreaming in LA, Exploring in CDMX, Wandering in MADRID' image='../assets/images/screenshot.png' />
            <table border="0" cellpadding="0" cellspacing="0" style={{width: "100%", maxWidth: "556px", padding: "0", margin: "0"}}>
                <tr>
                    <p style={{width: "100%", display: "block", fontFamily: "'Helvetica', sans-serif", fontSize: "12px", color: "black", padding: "0", margin: "25px 0 5px 0"}}>Mónica Lamela Blazquez</p>
                    <img style={{width: "129px"}} src="https://ci3.googleusercontent.com/mail-sig/AIorK4zHkFO8S7NvalLVLuzuZT5TblKlFwB5TFZvRa1vtp6RmgOqBiiiMGmhh3nSS_Q4HyOsF7l7xOg" alt='Logo there there' />
                    <p style={{width: "100%", display: "block", fontFamily: "'Helvetica', sans-serif", fontSize: "12px", color: "#F408F4", padding: '0', margin: "5px 0 25px 0"}}>LA, Mexico City, Madrid</p>
                    <a href="tel:+15103285130" style={{width: "100%", display: "block", fontFamily: "'Helvetica', sans-serif", fontSize: "12px", color: "black", padding: "0", margin: "0 0 0 0", textDecoration: "none", border: "none"}}>Call. +1 510.328.5130</a>
                    <a href="https://therethere-architecture.com" style={{width: "100%", display: "block", fontFamily: "'Helvetica', sans-serif", fontSize: "12px", color: "black", padding: "0", margin: "5px 0 0 0", textDecoration: "none", border: "none"}}>Web. <span style={{color: "#F408F4"}}>therethere-architecture.com</span></a>
                    <a href="https://www.instagram.com/there_____there/" style={{width: "100%", display: "block", fontFamily: "'Helvetica', sans-serif", fontSize: "12px", color: "black", padding: "0", margin: "5px 0 25px 0", textDecoration: "none", border: "none"}}>Instagram. <span style={{color: "#F408F4"}}>there_____there</span></a>
                    <p style={{width: "100%", display: "block", fontFamily: "'Helvetica', sans-serif", fontSize: "12px", color: "black", padding: "0", margin: "5px 0 0 0", textDecoration: "none", border: "none"}}>Board Member of the LA Forum</p>
                    <p style={{width: "100%", display: "block", fontFamily: "'Helvetica', sans-serif", fontSize: "12px", color: "black", padding: "0", margin: "5px 0 0 0", textDecoration: "none"}}>for Architecture and Urban Design</p>
                    <a href="http://laforum.org/" style={{width: "100%", display: "block", fontFamily: "'Helvetica', sans-serif", fontSize: "12px", color: "black", padding: "0", margin: "5px 0 0 0", textDecoration: "none", border: "none"}}>Visit <span style={{color: "#F408F4"}}>laforum.org</span></a>
                </tr>
            </table>
        </Layout>
    )
}

export default SignaturePage