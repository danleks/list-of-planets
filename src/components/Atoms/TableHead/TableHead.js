import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledTableHead = styled.thead`
    ${({ theme }) => theme.mq.responsive_table} {
        display: block;

            /* Hide table headers (but not display: none;, for accessibility) */
            & tr {
                position: absolute;
                top: -9999px;
                left: -9999px;
            }
    }
`;

const TableHead = ({ children }) => (
    <StyledTableHead>
        { children }
    </StyledTableHead>
);

TableHead.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default TableHead;