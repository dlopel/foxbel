import React from 'react'
import { Link } from 'react-router-dom'
import MainHeaderIcon from './MainHeaderIcon'
import './MainMenu.css'

export default function MainMenu() {
    const [isOpen, setIsOpen] = React.useState(false)
    const classes = isOpen ? 'main-menu_open' : ''

    const handleClickToggle = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <div>
            <MainHeaderIcon onClick={handleClickToggle}>
                <i className="fas fa-bars"></i>
            </MainHeaderIcon>
            <div className={`main-menu ${classes}`}>
                <div className="main-menu__content">
                    <div className="main-menu__group">
                        <div className="main-menu__user"><i className="fas fa-user"></i><span>Franciso M.</span></div>
                        <nav className="main-menu__nav">
                            <a className="main-menu__link" role="button" rel="nofollow">Cerrar Sesion</a>
                        </nav>
                    </div>
                    <div className="main-menu__group">
                        <h2 className="main-menu__title">Mi Libreria</h2>
                        <nav className="main-menu__nav">
                            <Link className="main-menu__link" to='#'><span>Recientes</span></Link>
                            <Link className="main-menu__link" to='#'><span>Artistas</span></Link>
                            <Link className="main-menu__link" to='#'><span>Albumes</span></Link>
                            <Link className="main-menu__link" to='#'><span>Canciones</span></Link>
                            <Link className="main-menu__link" to='#'><span>Estaciones</span></Link>
                        </nav>
                    </div>
                    <div className="main-menu__group">
                        <h2 className="main-menu__title">Playlist</h2>
                        <nav className="main-menu__nav">
                            <Link className="main-menu__link" to="#"><span>Metal</span></Link>
                            <Link className="main-menu__link" to="#"><span>Para Bailar</span></Link>
                            <Link className="main-menu__link" to="#"><span>Rock 90s</span></Link>
                            <Link className="main-menu__link" to="#"><span>Baladas</span></Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}