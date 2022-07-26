import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";




const Footer = ({pink}) => {

    const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            title
            copyright
        }
    }
    `);

const FooterContainer = styled.footer`
padding: 0 50px 200px;
display: flex;
width: 100%;
justify-content: space-between;
background-color: ${pink === true ? 'var(--pink)' : 'var(--white)'};
color: ${pink === true ? 'white' : 'var(--pink)'};
@media (max-width: 850px) {
    padding: 50px 20px 150px;
    p {
        width: 120px;
    }
}
`
    return(
        <FooterContainer>
            <p>{data.sanitySettingsPage.title}</p>
            <p>{data.sanitySettingsPage.copyright}</p>
        </FooterContainer>
    )
}



export default Footer