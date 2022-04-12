import React from 'react'
import styled from 'styled-components'

const Landing = () => {
    return(
        <LandingContainer>
            <div className='arriba'>
                <p>WEBSITE COMING SOON</p>
            </div>
            <div className='medio'>
                <img src='./logo.svg' alt='therethere logo' />
            </div>
            <div className='abajo'>
                <a href='mailto:hi@therethere-architecture.com' rel="noreferrer">GET IN TOUCH</a>
            </div>
            <div className='gradient'>

            </div>
        </LandingContainer>
    )
}

const LandingContainer = styled.section`
position: relative;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
.arriba {
    position: absolute;
    top: 0;
    width: 100%;
    padding-top: 70px;
    text-align: center;
    p {
        font-size: 1.2rem;
    }
}
.medio{
    max-width: 450px;
    align-self: center;
    @media (max-width: 680px) {
        max-width: 350px;
        padding-left: 20px;
        padding-right: 20px;
    }
}
.abajo {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 100px;
    text-align: center;
    a {
        color: var(--white);
        border-bottom: solid 1px var(--white);
        font-size: 1.2rem;
    }
}

.gradient {
    position: absolute;
    height: 50vh;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(244,8,244,0), rgba(244,8,244  ,1));
    z-index: -1;
}
`

export default Landing