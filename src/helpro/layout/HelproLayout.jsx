import { NavbarHelpro } from '../components/NavbarHelpro';
import './HelproLayout.css';


export const HelproLayout = ({ children }) => {
    return (
        <>
            <NavbarHelpro />

            <div className="layout-page">
                { children }
            </div>
        </>
    )
}
