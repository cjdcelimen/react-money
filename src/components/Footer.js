import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const FooterContainer = styled.footer`
    background-color: #16163E;
`

const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

const FooterLinksWrapper = styled.div`
    display: flex;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #F3F3FB;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    color: #F3F3FB;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #5E8DCA;
        transition: 0.3s ease-out;
    }
`

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const SocialLogo = styled(Link)`
    color: #F3F3FB;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

const WebsiteRights = styled.small`
    color: #F3F3FB;
    margin-bottom: 16px;
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

const SocialIconLink = styled.a`
    color: #F3F3FB;
    font-size: 24px;
`

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About</FooterLinkTitle>
                                    <FooterLink to="/signin">How Everything Works</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investor Relations</FooterLink>
                                    <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                    <FooterLink to="/signin">Main Office</FooterLink>
                                    <FooterLink to="/signin">Customer Support</FooterLink>
                                    <FooterLink to="/signin">Technical Support</FooterLink>
                                    <FooterLink to="/signin">Survey Team</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                    <FooterLink to="/signin">Investing for Dummies</FooterLink>
                                    <FooterLink to="/signin">Investing 101</FooterLink>
                                    <FooterLink to="/signin">Stock Basics</FooterLink>
                                    <FooterLink to="/signin">Success Stories</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Business</FooterLinkTitle>
                                    <FooterLink to="/signin">Instagram</FooterLink>
                                    <FooterLink to="/signin">Facebook</FooterLink>
                                    <FooterLink to="/signin">Youtube</FooterLink>
                                    <FooterLink to="/signin">Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>money</SocialLogo>
                            <WebsiteRights>money © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com/" target="facebook" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="//www.instagram.com/" target="instagram" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="//www.youtube.com/" target="youtube" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com/" target="twitter" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/" target="linkedin" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
