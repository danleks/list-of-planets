import styled from 'styled-components';

const SectionText = styled.p`
    max-width: 47rem;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 1.5;
    color: ${({ theme }) => theme.color.lightBlack};

    ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.s};
    }

`;

export default SectionText;