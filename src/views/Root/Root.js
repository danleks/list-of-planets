import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import theme from '../../assets/styles/theme';
import PlanetsListView from '../PlanetsListView/PlanetsListView';
import MainPageView from '../MainPageView/MainPageView';
import PlanetDetailsView from '../PlanetDetailsView/PlanetDetailsView';
import Routes from '../../routes/routes';
import AppContext from '../../components/Atoms/Context/Context';
import axios from 'axios';

const Root = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [planetsPerPage, setPlanetsPerPage] = useState(10);
  const [paginationStyling, setPaginationStyling] = useState(1);
  const [itemsPerPageStyling, setItemsPerPageStyling] = useState(10);

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          const result_page_1 = await axios.get('https://swapi.co/api/planets');
          const result_page_2 = await axios.get('https://swapi.co/api/planets/?page=2');
          const result_page_3 = await axios.get('https://swapi.co/api/planets/?page=3');
          const result_page_4 = await axios.get('https://swapi.co/api/planets/?page=4');
          const result_page_5 = await axios.get('https://swapi.co/api/planets/?page=5');
          const result_page_6 = await axios.get('https://swapi.co/api/planets/?page=6');
          const result_page_7 = await axios.get('https://swapi.co/api/planets/?page=7');

          setPlanets([...result_page_1.data.results, ...result_page_2.data.results, ...result_page_3.data.results, ...result_page_4.data.results, ...result_page_5.data.results, ...result_page_6.data.results, ...result_page_7.data.results]);
          setLoading(false);
        };
      fetchData();
  }, []); // an empty array prevents running useEffect infinitely

  // Get current planets
  const indexOfLastPlanet = currentPage * planetsPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
  const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

  // Change page and set styling of an active button

  const paginate = (e, pageNumber) => {
    setCurrentPage(pageNumber);

    if (+e.target.textContent === pageNumber) {
      setPaginationStyling(pageNumber);
    }
  }
  
  // Change number of items per page and set styling of an active button

  const loadPlanetsPerPage = (e, numberPerPage) => {
    setPlanetsPerPage(numberPerPage);

    // if previous page number was greater than the one possible after generating new planetsPerPage number than set current page to the last possible page
    if (Math.ceil(planets.length / numberPerPage) < currentPage) {
      setCurrentPage(Math.ceil(planets.length / numberPerPage));      
      setPaginationStyling(Math.ceil(planets.length / numberPerPage));      
    }

    if (+e.target.textContent === numberPerPage) {
      setItemsPerPageStyling(numberPerPage);
    }
  } 
  return (
    <AppContext.Provider value={{ currentPlanets, loading, planetsPerPage, totalPlanets: planets.length, paginate, loadPlanetsPerPage, paginationStyling, itemsPerPageStyling}}>
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <Switch>
              <Route exact path={Routes.home} component={MainPageView} />
              <Route exact path={Routes.planetsList} component={PlanetsListView} />
              <Route path={Routes.planet} component={PlanetDetailsView} />
            </Switch>      
          </>
        </BrowserRouter>
      </ThemeProvider>
      </>
    </AppContext.Provider>
  )
};

export default Root;
