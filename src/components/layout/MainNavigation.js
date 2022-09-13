import {Link} from 'react-router-dom';
import FavoritesContext from '../../store/favourites-context';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    const context = useContext(FavoritesContext);
    return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link> 
                </li>
                <li>
                    <Link to='/new-meetups'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favourites'>Favourite Meetups <span className={classes.badge}>{context.totalFavorites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;