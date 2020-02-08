import styled from 'styled-components';

const TableBodyCell = styled.td`
    padding: 2.5rem 2rem;
    border-bottom: 1px solid #eaeaea;
    text-align: left;

    ${({ theme }) => theme.mq.responsive_table} {
        display: block;
        /* Behave  like a "row" */
		position: relative;
		border: none;
		border-top: 1px solid #eaeaea;
        padding: 6px; 
		padding-left: 40%;

        ${({ theme }) => theme.mq.tablet} {
            padding-left: 25%;
        } 

        &:last-child {
            padding-left: 0;
            padding: 2rem 0;
            margin-left: 13px;
        }

        &:before {
            /* Now like a table header */
            position: absolute;
            /* Top/left values mimic padding */
            top: 6px;
            left: 15px;
            font-weight: ${({ theme }) => theme.fontWeight.bold}; 
            white-space: nowrap;
        }

        /*
        Label the data
        */
            &:nth-of-type(1):before { content: "Type"; }
            &:nth-of-type(2):before { content: "Name"; }
            &:nth-of-type(3):before { content: "Description"; }
    }

`;

export default TableBodyCell;