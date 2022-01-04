import React from "react"
import Wrapper from "./Wrapper"
import MainMenu from "./MainMenu"
import Searcher from "./Searcher"
import Logo from "./Logo"
import './MainHeader.css'

export default function MainHeader() {

    return (
        <header className="main-header">
            <Wrapper classes='main-header__content'>
                <div className="main-header__logo">
                    <Logo />
                </div>
                <div className='main-header__buttons-container'>
                    <Searcher />
                    <MainMenu />
                </div>

            </Wrapper>
        </header>
    )
}