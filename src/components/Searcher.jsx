import React from 'react'
import MainHeaderIcon from './MainHeaderIcon'
import { AppContext } from '../context/AppContext'
import './Searcher.css'

export default function Searcher() {
    const [isOpen, setIsOpen] = React.useState(false)
    const inputRef = React.useRef(null)
    const appContext = React.useContext(AppContext)

    const classes = isOpen ? 'searcher_open' : ''

    const handleClickOpen = () => {
        inputRef.current.focus()
        setIsOpen(true)
    }
    const handleClickClose = () => {
        inputRef.current.value = ''
        setIsOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = e.target.searcher.value
        if (text) {
            appContext.getTrucksByTitle(text)
        }
    }

    return (
        <div>
            <MainHeaderIcon onClick={handleClickOpen}>
                <i className="fas fa-search"></i>
            </MainHeaderIcon>
            <div className={`searcher ${classes}`}>
                <button className="searcher__close" onClick={handleClickClose}>
                    <i className='fas fa-times'></i>
                </button>
                <form className="searcher__form" onSubmit={handleSubmit}>
                    <input
                        name='searcher'
                        ref={inputRef}
                        type="text"
                        placeholder="Buscar..."
                        required
                        minLength='1'
                        autoComplete="off"
                    />
                    <button type='submit'><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}