import { FaUserCircle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import './MenuUser.css';
import { useSelector } from "react-redux";

export const MenuUser = ({ desplegarSubmenu }) => {

    const { displayName } = useSelector( state => state.auth );

    const fistName = displayName.split(' ');

    return (
        <>
            <div className="menu-user-container" onClick={ desplegarSubmenu }>
                <div className="menu-user-elements">
                    <div className="menu-user-icon">
                        <FaUserCircle />
                    </div>
                    <div className="menu-user-name">
                        { fistName[0] }
                    </div>
                    <div className="menu-user-desplegar">
                        <BsChevronDown />
                    </div>
                </div>
            </div>
        </>
    )
}
