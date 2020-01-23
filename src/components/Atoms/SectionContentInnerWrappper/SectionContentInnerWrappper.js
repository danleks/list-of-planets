import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StyledSectionContentInnerWrapper = styled.div`
    height: 100%;
    flex: 1;

    &:first-child {
        order: 2;

        ${({ theme }) => theme.mq.desktop} {
            order: 1;
        }
    }

    &:last-child {
        order: 1;
        margin-bottom: 2rem;

        ${({ theme }) => theme.mq.mobile_2} {
            margin-bottom: 6rem;
        }

        ${({ theme }) => theme.mq.desktop} {
            order: 2;
        }
    }
`;

const SectionContentInnerWrapper = ({ children }) => (
    <StyledSectionContentInnerWrapper>
        { children }
    </StyledSectionContentInnerWrapper>
);

SectionContentInnerWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default SectionContentInnerWrapper;