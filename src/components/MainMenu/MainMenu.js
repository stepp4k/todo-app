import { NavLink } from 'react-router-dom';
import './MainMenu.scss';

function MainMenu() {
    return (
        <nav className='nav-bar'>
            <NavLink to='/'>Tasks</NavLink>
            <NavLink to='/help'>Help</NavLink>
        </nav>
    );
}

export default MainMenu;