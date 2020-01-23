import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StyledSectionContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 110rem;
    width: 100%;
    margin: ${({ page }) => page === 'details' ? '10rem 0' : '4rem 0'};

    ${({ theme }) => theme.mq.mobile_2} {
        margin: ${({ page }) => page === 'details' ? '10rem 0' : '0'};
    }

    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
    }
`;

const SectionContentWrapper = ({ children, page }) => (
    <StyledSectionContentWrapper page={page}>
        { children }
    </StyledSectionContentWrapper>
);

SectionContentWrapper.propTypes = {
    page: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired


};

SectionContentWrapper.defaultProps = {
    page: '',
}

export default SectionContentWrapper;