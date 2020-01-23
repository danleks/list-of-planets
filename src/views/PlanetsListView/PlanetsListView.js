import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../components/Atoms/Context/Context';
import SectionWrapper from '../../components/Atoms/SectionWrapper/SectionWrapper';
import StyledLoader from '../../components/Atoms/Loader/Loader';
import SearchBar from '../../components/Molecules/SectionHeader/SectionHeader';
import Pagination from '../../components/Molecules/Pagination/Pagination';
import PaginationPanel from '../../components/Atoms/PaginationPanel/PaginationPanel';
import SearchInput from '../../components/Atoms/SearchInput/SearchInput';
import SectionHeader from '../../components/Molecules/SectionHeader/SectionHeader';
import Button from '../../components/Atoms/Button/Button';
import Table from '../../components/Molecules/Table/Table';
import TableBody from '../../components/Atoms/TableBody/TableBody';
import TableRow from '../../components/Atoms/TableRow/TableRow';
import TableBodyCell from '../../components/Atoms/TableBodyCell/TableBodyCell';

const ContentWrapper = styled.div`
    max-width: 90rem;
    width: 100%;
    margin: 8rem auto;

    ${({ theme }) => theme.mq.tablet} {
        margin: 3rem auto;
    }

    ${({ theme }) => theme.mq.desktop} {
        margin: 6rem auto;
    }
`;

const PageTitle = styled.h2`
    margin-bottom: 3rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    text-align: center;

    ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

const PlanetsListView = () => {
    const [inputVal, setInputVal] = useState('');
    const handleInputChange = e => setInputVal(e.target.value.toLowerCase());
    const filterPlanets = (inputValue, item) => item.includes(inputValue);

    const {currentPlanets, loading, planetsPerPage, totalPlanets, paginate, loadPlanetsPerPage, paginationStyling, itemsPerPageStyling} = useContext(AppContext);  

    return (
        <SectionWrapper>
            <SectionHeader goto='home'/> 
            <ContentWrapper>
            <PageTitle>Star wars planets ecosystem</PageTitle>
            <SearchInput placeholder='Enter planet name' onChange={handleInputChange} value={inputVal} />
                {
                    loading 
                    ? 
                    <StyledLoader 
                        type="TailSpin"
                        color="hsla(0, 0%, 37%, 1)"
                        height={100}
                        width={100}
                        // timeout={3000} //3 secs 
                    />
                    :
                    <Table>
                        <TableBody>
                            {
                                currentPlanets
                                .filter(planet => filterPlanets(inputVal, planet.name.toLowerCase()))
                                .map(planet => (
                                    <TableRow key={planet.name}>
                                        <TableBodyCell>
                                            Planet
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {planet.name}
                                        </TableBodyCell> 
                                        <TableBodyCell>
                                            {`${planet.diameter}km in diameter with ${planet.climate} climate.`}
                                        </TableBodyCell> 
                                        <TableBodyCell>
                                            <Button secondary card to={`/planets-list/${planet.name.toLowerCase()}`}>View details</Button>
                                        </TableBodyCell>  
                                    </TableRow> 
                                ))
                            }
                        </TableBody>
                    </Table>
                }

                {
                    !loading 
                    && 
                    <PaginationPanel>
                        <Pagination 
                            totalPlanets={totalPlanets}
                            planetsPerPage={planetsPerPage}
                            paginate={paginate}
                            loadPlanetsPerPage={loadPlanetsPerPage}
                            itemsPerPageStyling={itemsPerPageStyling}
                            paginationStyling={paginationStyling}
                        />
                    </PaginationPanel>
                }
            </ContentWrapper>
        </SectionWrapper>
    )
};

export default PlanetsListView;
