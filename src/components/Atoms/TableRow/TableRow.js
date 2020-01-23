import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledTableRow = styled.tr`
    color: ${({ theme }) => theme.color.lightBlack};
    background-color: #f7f7f7;
    ${({ theme }) => theme.mq.responsive_table} {
        display: block;
        font-size: ${({ theme }) => theme.fontSize.xxs};
        margin-bottom: 2rem;
    }

    ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;

const TableRow = ({ children }) => (
    <StyledTableRow>
        { children }
    </StyledTableRow>
);

TableRow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};


export default TableRow;