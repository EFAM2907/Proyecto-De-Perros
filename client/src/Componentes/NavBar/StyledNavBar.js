import styled from 'styled-components';
import {Container} from '../../../styles/global';
import {Link} from 'react-router-dom';
import {GiDogHouse} from 'react-icons/gi';

export const Nav = styled.nav`
    background-color: ${(props) => props.theme.primary};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    z-index: 999;
`

export const NavContainer = styled(Container) `
    display: flex;
    justify-content: space-between;
    height: 80px;

  ${Container}
`;

export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`

export const NavIcon = styled(GiDogHouse)`
    margin-right: 0.5rem;
`

export const DarkMode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
` 

export const MobileIcon = styled.div`
    display: none;
  
    @media screen and (max-width: 600px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 60px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: ${(props) => props.theme.primary};
        padding: 0;
    }
`

export const NavItem = styled.li `
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid ${(props) => props.theme.secondary};
    }

    @media screen and (max-width: 600px){
        width: 100%;

        &:hover {
        border: none;
        }
    }
`

export const MinText = styled.p`
    color: #fff;
    display: flex;
    align-items: center;
    top: -80px;
`

export const NavAcces = styled(Link)`
    color: ${(props) => props.theme.font};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 600px) {
        text-align: center;
        padding: 0;
        width: 100%;
        display: table;

        &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
        }
    }
`

export const NavButton = styled.li`
    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`
export const NavButtonLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`

export const Button = styled.button`
    border-radius: 4px;
    background: ${(props) => props.theme.secondary};
    white-space: nowrap;
    padding: 5px;
    font-size: ${(fontBig) => (fontBig ? '20px' : '16px')};
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${(props) => props.theme.primary};
    }
    
    @media screen and (max-width: 600px) {
        width: 80%;
        margin-top: 0;
    }
`