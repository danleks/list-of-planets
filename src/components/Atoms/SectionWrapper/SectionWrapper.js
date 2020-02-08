import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledSectionWrapper = styled.section`
    position: relative;
    display: ${({ type }) => type === 'flex' ? 'flex' : 'block'};
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${({ type }) => type === 'flex' ? '0 5rem' : '1rem'};

    ${({ theme }) => theme.mq.height} {
        height: ${({ page }) => page === 'details' ? '100%' : '100vh'};
    }

    ${({ theme }) => theme.mq.mobile_2} {
        padding: ${({ type }) => type === 'flex' ? '2rem 6rem' : '0'};
    }

    ${({ theme }) => theme.mq.tablet} {
        padding: ${({ type }) => type === 'flex' ? '2rem 6rem' : '5rem'};
    }
`;

const SectionWrapper = ({ type, page, children }) => (
    <StyledSectionWrapper type={type} page={page}>
        { children }
    </StyledSectionWrapper>
);


SectionWrapper.propTypes = {
    type: PropTypes.string,
    page: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

SectionWrapper.defaultProps = {
    type: '',
    page: '',
}


export default SectionWrapper;