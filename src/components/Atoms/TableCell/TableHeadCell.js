import styled from 'styled-components';

const TableHeadCell = styled.th`
    padding: 2.5rem 2rem;
    background-color: #333;
    text-align: left;
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    ${({ theme }) => theme.mq.responsive_table} {
        display: block;
        padding: 6px;
    }

`;

export default TableHeadCell;

