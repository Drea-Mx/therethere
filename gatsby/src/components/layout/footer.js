import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";




const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            title
            copyright
        }
    }
    `);


    return(
        <FooterContainer>
            <p>{data.sanitySettingsPage.title}</p>
            <p>{data.sanitySettingsPage.copyright}</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.nav`
padding: 0 50px 200px;
display: flex;
width: 100%;
justify-content: space-between;
@media (max-width: 850px) {
    padding: 50px 20px 150px;
    p {
        width: 120px;
    }
}
`

export default Footer