import { FaUserCircle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import './MenuUser.css';

export const MenuUser = ({ desplegarSubmenu }) => {
    return (
        <>
            <div className="menu-user-container" onClick={ desplegarSubmenu }>
                <div className="menu-user-elements">
                    <div className="menu-user-icon">
                        <FaUserCircle />
                    </div>
                    <div className="menu-user-name">
                        Alejandro
                    </div>
                    <div className="menu-user-desplegar">
                        <BsChevronDown />
                    </div>
                </div>
            </div>
        </>
    )
}
