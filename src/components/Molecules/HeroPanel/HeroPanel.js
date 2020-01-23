import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../Atoms/SectionTitle/SectionTitle';
import SectionText from '../../Atoms/SectionText/SectionText';
import Button from '../../Atoms/Button/Button';
import HeroIMG from '../../../assets/images/flame-searching.png';
import SectionContentWrapper from '../../Atoms/SectionContentWrapper/SectionContentWrapper';
import SectionContentInnerWrapper from '../../Atoms/SectionContentInnerWrappper/SectionContentInnerWrappper';
import SectionImg from '../../Atoms/SectionImg/SectionImg';


const StyledHeroText = styled(SectionText)`
    margin: 3rem 0;
`;

const HeroPanel = () => {
    return (
        <SectionContentWrapper>
            <SectionContentInnerWrapper>
                <SectionTitle>
                    star wars planets ecosystem
                </SectionTitle>
                <StyledHeroText>
                    Have you always been curious about Star Wars world ? Want to know more about it ? Join the journey and discover the most distant places of the universe.
                </StyledHeroText>
                <Button to='/planets-list' >
                    discover
                </Button>
            </SectionContentInnerWrapper>
            <SectionContentInnerWrapper>
                <SectionImg src={HeroIMG} alt='man looking through telescope' />
            </SectionContentInnerWrapper>
        </SectionContentWrapper>
    )
    
};

export default HeroPanel;