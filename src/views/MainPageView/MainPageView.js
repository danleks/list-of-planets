import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../components/Atoms/SectionWrapper/SectionWrapper';
import HeroPanel from '../../components/Molecules/HeroPanel/HeroPanel';
import SectionHeader from '../../components/Molecules/SectionHeader/SectionHeader';
import Footer from '../../components/Atoms/Footer/Footer';

const MainPageView = () => (
    <SectionWrapper type='flex'>
        <HeroPanel />
        <Footer />
    </SectionWrapper>
);

export default MainPageView;