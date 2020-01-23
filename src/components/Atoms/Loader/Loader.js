import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled(Loader)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
`;

export default StyledLoader;