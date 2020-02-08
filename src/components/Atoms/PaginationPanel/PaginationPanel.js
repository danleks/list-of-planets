import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledPaginationPanel = styled.footer`
    width: 100%;
    margin-top: 1.5rem;
`;

const PaginationPanel = ({ children }) => (
    <StyledPaginationPanel>
        { children }     
    </StyledPaginationPanel>
);


PaginationPanel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default PaginationPanel;