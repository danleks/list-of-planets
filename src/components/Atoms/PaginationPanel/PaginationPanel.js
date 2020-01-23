import React from 'react';
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

export default PaginationPanel;