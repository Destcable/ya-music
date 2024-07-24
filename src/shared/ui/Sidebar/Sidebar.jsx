import { NavLink } from 'react-router-dom';
import { sidebarLinkStyle, sidebarStyle } from './styles/sidebar.styles';

const Sidebar = () => { 
    return <div className={sidebarStyle}>
        <NavLink to={'/main'} className={sidebarLinkStyle}>
            <span>Главная</span>
        </NavLink>        
        <NavLink to={'/radio'} className={sidebarLinkStyle}>
            <span>Радио</span>
        </NavLink>
    </div>
};

export default Sidebar;