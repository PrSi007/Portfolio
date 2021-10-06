import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>“If You Think Math is Hard Try Web Development”</FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>PrSi007</SocialLogo>
                        <WebsiteRights>Made with ❤️ by Prakhar Singh</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://github.com/PrSi007" target="_blank" aria-label="Github"><FaGithub /></SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/prakhar-singh-9136821b2/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/prakhar___07/?hl=en/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
