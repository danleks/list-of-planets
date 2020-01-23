import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Routes from '../../routes/routes';
import AppContext from '../../components/Atoms/Context/Context';
import StyledLoader from '../../components/Atoms/Loader/Loader';
import SectionWrapper from '../../components/Atoms/SectionWrapper/SectionWrapper';
import SectionHeader from '../../components/Molecules/SectionHeader/SectionHeader';

import SectionContentWrapper from '../../components/Atoms/SectionContentWrapper/SectionContentWrapper';
import SectionContentInnerWrapper from '../../components/Atoms/SectionContentInnerWrappper/SectionContentInnerWrappper';
import SectionImg from '../../components/Atoms/SectionImg/SectionImg';

import SectionTitle from '../../components/Atoms/SectionTitle/SectionTitle';
import SectionText from '../../components/Atoms/SectionText/SectionText';

const MainWrapper = styled.div`
    display: flex;
    width: 125rem;
`;

const StyledSectionText = styled(SectionText)`
    margin: 3rem 0;
`;

const StyledText = styled.p`
    margin-bottom: 5rem;
    font-size: ${({ theme }) => theme.fontSize.m};
`;

const InnerWrapper = styled.div`
    display: block;
    flex: 1;
`;

const StyledTable = styled.table`
    border-collapse: collapse;
    background-color: #f9f9f9;
`;

const StyledTableCell = styled.td`
    padding: 2rem;
    
    &:first-child {
        border-right: 1px solid black;
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
`;

const BackgroundImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({ pathUrl }) => pathUrl});
    background-size: cover;
    background-repeat: no-repeat;   
    background-position: bottom;
`;

const PlanetDetailsView = ({ match }) => {
    const { currentPlanets } = useContext(AppContext);
    let planet = null;
    let pathUrl = require(`../../assets/images/${Math.floor(Math.random() * 11) + 1}.png`);

    for (let i = 0; i < currentPlanets.length; i++) {
        if (currentPlanets[i].name.toLowerCase() === match.params.id.toLowerCase()) {
            planet = currentPlanets[i];
        }
    }

    return (
        <SectionWrapper type='flex' page='details'>
            <SectionHeader /> 
            {
                 planet === null ? <StyledLoader 
                 type="TailSpin"
                 color="hsla(0, 0%, 37%, 1)"
                 height={100}
                 width={100}
                 // timeout={3000} //3 secs 
             />

             :
             <SectionContentWrapper page='details'>
             <SectionContentInnerWrapper>
                 <SectionTitle>Welcome to { planet.name } world!</SectionTitle>
                 <StyledSectionText>Planet’s characteristics:</StyledSectionText>
                 <StyledTable>
                    <tbody>
                        <tr>
                            <StyledTableCell>
                                Rotation period:
                            </StyledTableCell>
                            <StyledTableCell>
                                { planet.rotation_period}
                            </StyledTableCell>
                        </tr>
                        <tr>
                            <StyledTableCell>
                                Orbital Period:
                            </StyledTableCell>
                            <StyledTableCell>
                                { planet.orbital_period}
                            </StyledTableCell>
                        </tr>
                        <tr>    
                            <StyledTableCell>
                                Diameter:
                            </StyledTableCell>
                            <StyledTableCell>
                                { planet.diameter}
                            </StyledTableCell>
                        </tr>
                        <tr>
                            <StyledTableCell>
                                Climate:
                            </StyledTableCell>
                            <StyledTableCell>
                                { planet.climate}
                            </StyledTableCell>
                        </tr>
                        <tr>
                            <StyledTableCell>
                                Gravity:
                            </StyledTableCell>
                            <StyledTableCell>
                                { planet.gravity}
                            </StyledTableCell>
                        </tr>
                        <tr>
                            <StyledTableCell>
                                Terrain:
                            </StyledTableCell>
                            <StyledTableCell>
                                { planet.terrain}
                            </StyledTableCell>
                        </tr>
                        <tr>
                            <StyledTableCell>
                                Surface water:
                            </StyledTableCell>
                            <StyledTableCell>
                                { planet.surface_water}
                            </StyledTableCell>
                        </tr>
                        <tr>
                            <StyledTableCell>
                                Population:
                            </StyledTableCell>
                            <StyledTableCell>
                                { planet.population}
                            </StyledTableCell>
                        </tr>
                    </tbody>
                 </StyledTable>
             </SectionContentInnerWrapper>
             <SectionContentInnerWrapper>
                <SectionImg src={pathUrl} alt='' />
             </SectionContentInnerWrapper>
         </SectionContentWrapper>

            }
      
        </SectionWrapper>
    )};

export default PlanetDetailsView;