import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../../Atoms/SearchInput/SearchInput';
import HomeIcon from '../../../assets/images/home.svg';
import BackIcon from '../../../assets/images/back.svg';


const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 6rem;
    padding: 3rem;
    background-color: ${({ theme }) => theme.color.black};
    z-index: ${({ theme }) => theme.zIndex.zIndex90};
`;

const StyledImg = styled.img`
    width: 3rem;
`;

const SectionHeader = ({ goto }) => (
    <StyledHeader>
        <Link to={goto === 'home' ? '/' : '/planets-list'}>
            <StyledImg src={goto === 'home' ?  HomeIcon : BackIcon} alt='home icon'/>
        </Link>
    </StyledHeader>
);

export default SectionHeader;