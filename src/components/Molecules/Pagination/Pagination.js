import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledPagination = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    ${({ theme }) => theme.mq.desktop} {
        flex-direction: row;
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
`;

const StyledHeader = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ theme }) => theme.color.lightGrey};
    margin-bottom: 3px;
`;

const StyledPaginationList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

const StyledPaginationItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
    border-right: none;
    cursor: pointer;
    background-color: ${({ theme, itemsPerPageStyling, paginationStyling }) => itemsPerPageStyling || paginationStyling ? theme.color.lighterGrey : 'transparent'};

    &:last-child {
        border-right: 1px solid ${({ theme }) => theme.color.lightGrey};
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.lighterGrey};
    }
`;

const StyledPaginationLink = styled(Link)`
    &,
    &:link,
    &:visited,
    &:active {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.xxs};
        color: ${({ theme }) => theme.color.black};
    }
`;

const Pagination = ({ planetsPerPage, totalPlanets, paginate, loadPlanetsPerPage, paginationStyling, itemsPerPageStyling }) => {
    const pageNumbers = [];
    const itemsPerPage = [5, 10, 15, totalPlanets];

    for (let i = 1; i <= Math.ceil(totalPlanets / planetsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <StyledPagination>
            <InnerWrapper>
                <StyledHeader>Items per page:</StyledHeader>
                <StyledPaginationList>
                    {
                        itemsPerPage.map(item => (
                            <StyledPaginationItem key={item} itemsPerPageStyling={itemsPerPageStyling === item ? true : false}> 
                                <StyledPaginationLink onClick={(e) => loadPlanetsPerPage(e, item)}>
                                    { item }
                                </StyledPaginationLink>
                            </StyledPaginationItem>
                        ))
                    }
                </StyledPaginationList>
            </InnerWrapper>
            <InnerWrapper>
                <StyledHeader>Page:</StyledHeader>
                <StyledPaginationList>
                    {
                        pageNumbers.map(number => (
                            <StyledPaginationItem key={number} paginationStyling={paginationStyling === number ? true : false}>
                                <StyledPaginationLink onClick={(e) => paginate(e, number)} to='#'>
                                    { number }
                                </StyledPaginationLink>
                            </StyledPaginationItem>
                        ))
                    }
                </StyledPaginationList>
            </InnerWrapper>
        </StyledPagination>
    )
};

export default Pagination;