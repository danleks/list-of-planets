import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import TableHead from '../../Atoms/TableHead/TableHead';
import TableRow from '../../Atoms/TableRow/TableRow';
import TableHeadCell from '../../Atoms/TableCell/TableHeadCell';


const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    ${({ theme }) => theme.mq.responsive_table} {
        display: block;
    }
`;

const Table = ({ children }) => (
    <StyledTable>
         <TableHead>
            <TableRow>
                <TableHeadCell>Type</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell colSpan='2'>Description</TableHeadCell>
            </TableRow>
        </TableHead>
        { children }
    </StyledTable>
);

Table.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Table;