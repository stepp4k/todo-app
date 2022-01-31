import './Header.scss';
import { GoTasklist } from 'react-icons/go';


function Header () {
    return (
        <header className='header'>
            <div className='title'>Todo App</div>
            <GoTasklist />
            <div className='author'>by Aleksei Bikov</div>
        </header>
    );
}

export default Header;