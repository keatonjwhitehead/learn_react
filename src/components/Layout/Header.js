import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import libraryImg from '../../assets/library-img.jpg'
const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>Louisville Public Library</h1>
            <HeaderCartButton onClick={props.onShowCart} onHideCardHandler={props.onHideCard}/>
        </header>
        <div className={classes['main-image']}>
            <img src={libraryImg} alt="The Louisville Public Library"/>
        </div>
        </Fragment>
    )
}

export default Header;