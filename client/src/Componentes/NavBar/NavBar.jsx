import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { FaSun, FaRegMoon, FaTimes, FaBars } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { Nav, NavContainer, NavLogo, NavIcon, DarkMode, MobileIcon, NavMenu, NavItem, NavAcces, ContainerLogo, MinText, NavButton, NavButtonLink, Button } from "./StyledNavBar";
import { IconContext } from 'react-icons/lib';
import Logout from "../Logout/Logout";

export default function NavBar({theme, setTheme}) {

    const userInfo = useSelector((state) => state.usuario)

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const handleTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {

    }, [userInfo])

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    const iconTheme = theme === 'dark' ? (<FaSun/>) : (<FaRegMoon/>)

    return(
        <IconContext.Provider value={{color: 'fff'}}>
            <Nav>
                <NavContainer>
                    <ContainerLogo>
                        <NavLogo to='/'>
                            <NavIcon/>
                            AdoptA
                        </NavLogo>
                        <DarkMode onClick={handleTheme}>{iconTheme}</DarkMode>
                    </ContainerLogo>

                    
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>

                    {
                        userInfo && userInfo ? (
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem>
                                    <NavAcces to='/'>Hogar</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/adopt'>Mascotas</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/donation'>Donación</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/about'>Sobre Nosotros</NavAcces>
                                </NavItem>                       
                                <NavItem>
                                    <Logout />
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/userprofile'>Perfil</NavAcces>
                                </NavItem>
                            </NavMenu>
                        ) : (
                            <NavMenu>
                                <NavItem>
                                    <NavAcces to='/'>Hogar</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/adopt'>Mascotas</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/about'>Sobre Nosotros</NavAcces>
                                </NavItem>  
                                <NavItem>
                                    <NavAcces to='/login'>Iniciar Sesión</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/register'>Registrar</NavAcces>
                                </NavItem>
                            </NavMenu>
                        )
                    }

                        {/* <NavButton>
                            {
                                button ? (
                                    <NavButtonLink to='/'>
                                        <Button primary>Sign Up</Button>
                                    </NavButtonLink>
                                ) : (
                                    <NavButtonLink to='/'>
                                    <Button fontBig primary>Sign Up</Button>
                                </NavButtonLink>
                                )
                            }
                        </NavButton> */}
                    
                        {/* </NavMenu>
                        <NavMenu> */}
                        {/* <MinText>|</MinText> */}

                        {/* {
                            userInfo && userInfo ?(
                            :
                        } */}
                </NavContainer>
            </Nav>
        </IconContext.Provider>

    )
}