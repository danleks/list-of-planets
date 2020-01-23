import React from 'react';
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    &,
    &:link,
    &:visited,
    &:active {
        display: inline-block;
        padding: 2rem 3rem;
        border: none;
        border-radius: 1rem;
        font-size: ${({ theme}) =>  theme.fontSize.s};
        font-weight: ${({ theme}) =>  theme.fontWeight.semiBold};
        color: ${({ theme }) => theme.color.white};
        outline: none;
        text-decoration: none;
        background-color:  ${({ theme }) => theme.color.black};
        box-shadow: 0 4px 10px -3px ${({ theme }) => theme.color.lightBlack};
        cursor: pointer;
        transition: transform .3s ease-in;

        &:hover {
            transform: translateY(-2px);
        }

        ${({ secondary }) => (
            secondary && css`
                padding: 1.1rem;
                border-radius: 4px;
                background-color:  ${({ theme }) => theme.color.dark};
                box-shadow: none;
                font-size: ${({ theme}) =>  theme.fontSize.xxs};
                font-weight: ${({ theme}) =>  theme.fontWeight.regular};
                color: ${({ theme }) => theme.color.white};
                transition: background-color .3s ease-in;

                &:hover {
                    transform: unset;
                    background-color:  ${({ theme }) => theme.color.lightDark};
                }

                ${({ theme }) => theme.mq.tablet} {
                   margin: 0;
                }

            `
        )}

    }
`;


export default Button;