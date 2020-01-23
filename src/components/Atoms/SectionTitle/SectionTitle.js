import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledSectionTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 1;
    letter-spacing: -1px;
    color: ${({ theme }) => theme.color.black};

    ${({ theme }) => theme.mq.mobile_2} {
        font-size: ${({ theme }) => theme.fontSize.large};
    }

    ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.larger};
    }

    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.fontSize.xxl};
        word-spacing: -6px;
    }

    ${({ theme }) => theme.mq.huge} {
        font-size: ${({ theme }) => theme.fontSize.huge};
    }
`;

const SectionTitle = ({ children }) => (
    <StyledSectionTitle>
        { children }
    </StyledSectionTitle>
);

SectionTitle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default SectionTitle;