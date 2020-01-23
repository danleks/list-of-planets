import styled from 'styled-components';
import SearchIcon from '../../../assets/images/search.svg';

const SearchInput = styled.input`
    width: 100%;
    padding: 1rem 0 1rem 3.5rem;
    border: 1px solid #eaeaea;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSize.extraSmall};
    color: ${({ theme }) => theme.color.black};
    /* box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.color.lightGrey}; */
    background-color: transparent;
    transition: box-shadow .3s ease-in;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: 1.5rem;
    transition: border-color .3s ease-in;

    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.color.accentColor_3};
    }
`;

export default SearchInput;