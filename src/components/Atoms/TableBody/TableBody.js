import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledTableBody = styled.tbody`
    ${({ theme }) => theme.mq.responsive_table} {
        display: block;
    }
`;

const TableBody = ({ children }) => (
    <StyledTableBody>
        { children }
    </StyledTableBody>
);

TableBody.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default TableBody;