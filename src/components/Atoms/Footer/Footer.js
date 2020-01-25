import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: -5rem;
    width: 59%;
    padding: 1rem 0;

    ${({ theme }) => theme.mq.desktop} {
        bottom: 0;
    }
`;

const StyledFooterText = styled.p`
    font-size: 10px;
    font-weight: 100;
    text-align: center;
    color: hsl(0, 0%, 58%);
`;

const StyledFooterLink = styled.a`
    &,
    &:link,
    &:visited,
    &:active {
        display: inline-block;
        font-size: 10px;
        font-weight: 100;
        color: hsl(0, 0%, 58%);
        text-decoration: none;
    }
`;

const StyledIcon = styled.img`
    display: inline-block;
`;

const Footer = () => (
    <StyledFooter>
        <StyledFooterText>Made with luv by <StyledFooterLink href='https://github.com/danleks' target='_blank' rel="noopener noreferrer">danleks</StyledFooterLink>. Illustrations by <StyledFooterLink href='https://icons8.com' target='_blank' rel="noopener noreferrer">Ouch.pics</StyledFooterLink> and <StyledFooterLink href='https://absurd.design/' target='_blank' rel="noopener noreferrer">absurd.design</StyledFooterLink></StyledFooterText>
    </StyledFooter>
);

export default Footer;