import { useState } from 'react';
import { NavbarHelpro } from '../components/NavbarHelpro';
import './HelproLayout.css';
import { Footer } from './Footer';


export const HelproLayout = ({ children }) => {

    const [dezplegarMenu, setDezplegarMenu] = useState(false);

    const clickMenuHamburguesa = () => {
        setDezplegarMenu(!dezplegarMenu);
    }

    return (
        <>
            <NavbarHelpro clickMenuHamburguesa={ clickMenuHamburguesa } dezplegarMenu={ dezplegarMenu } setDezplegarMenu={ setDezplegarMenu } />

            <div className="layout-page" onClick={ () => setDezplegarMenu( false ) }>
                { children }
                <Footer />
            </div>

            
        </>
    )
}
