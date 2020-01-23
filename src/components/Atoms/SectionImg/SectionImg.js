import styled from 'styled-components';

const SectionImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    margin: auto;

    ${({ theme }) => theme.mq.mobile_2} {
        width: 70%;
    }

    ${({ theme }) => theme.mq.tablet_1} {
        width: 55%;
    }

    ${({ theme }) => theme.mq.desktop} {
        width: 100%;
    }

`;

export default SectionImg;