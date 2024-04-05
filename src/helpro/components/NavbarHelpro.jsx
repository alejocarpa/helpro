import { useSelector } from 'react-redux';
import { BarraBusqueda, LogoNavbarHelpro, MenuUser, SubMenuUser } from './';
import './NavbarHelpro.css';
import { BotonLogin } from '../layout';
import { Spinner } from 'react-bootstrap';
import { MenuLateral } from './MenuLateral';
import { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import useScreenSize from '../../hooks/useScreenSize';

export const NavbarHelpro = ({ clickMenuHamburguesa, dezplegarMenu, setDezplegarMenu }) => {

    const { elementClicked } = useSelector(state => state.helpro);
    const { status } = useSelector( state => state.auth );

    const { width } = useScreenSize();

    let divSubmenu = document.getElementById('navbar-submenu-user');

    const desplegarSubmenu = () => {

        !divSubmenu ? divSubmenu = document.getElementById('navbar-submenu-user') : ""

        if (divSubmenu) {
            
            divSubmenu.style.display === 'none' ? divSubmenu.style.display = 'block' : divSubmenu.style.display = 'none'

        }
    }

    if (divSubmenu) {

        const click = elementClicked;

        if (
                divSubmenu.style.display === "block" 
                && 
                click.substr(0,100) !== divSubmenu.outerHTML.substr(0,100)
                &&
                click.substr(0,100) !== "<div class=\"menu-user-name\">Alejandro</div>"
                &&
                click.substr(0,50) !== "<path d=\"M248 8C111 8 0 119 0 256s111 248 248 248 "
                &&
                click.substr(0,50) !== "<svg stroke=\"currentColor\" fill=\"currentColor\" str"
                &&
                click.substr(0,50) !== "<path fill-rule=\"evenodd\" d=\"M1.646 4.646a.5.5 0 0"
            ) {
            divSubmenu.style.display = "none";
        }
    }
    
    return (
        <>
            <div className="navbar-container" onClick={ dezplegarMenu ? () => setDezplegarMenu( false ) : () => {} }>
                <div className="logo-responsive">
                    <div className="navbar-logo-responsive">
                        <LogoNavbarHelpro />
                    </div>
                </div>
                <div className="navbar-elements">
                    <div className="navbar-logo">
                        <LogoNavbarHelpro />
                    </div>

                    <div className="navbar-barra-busqueda">
                        <BarraBusqueda />
                    </div>

                    {
                        width <= 990
                        ?
                        <div className="navbar-menu-hamburguesa">
                            <HiMenu onClick={ clickMenuHamburguesa } style={{ cursor: 'pointer' }} />
                        </div>                        
                        :
                        <div className="navbar-usuario">
                            { 
                                status === 'checking'
                                ?
                                <Spinner animation="border" variant="light" />
                                :
                                status === 'authenticated' 
                                ? 
                                <MenuUser desplegarSubmenu={ desplegarSubmenu } /> 
                                : 
                                <BotonLogin /> 
                            }
                        </div>
                    }
                    

                    <MenuLateral dezplegarMenu={ dezplegarMenu } />
                </div>
            </div>
            <div 
                id="navbar-submenu-user" 
                style={{ display: 'none' }}
            >
                <SubMenuUser />
            </div>
        </>
    )
}
