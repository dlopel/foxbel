import React from 'react'
import Wrapper from './Wrapper'
import './Player.css'

export default function Player({ song, artist, album }) {
    return (
        <div className='player'>
            <Wrapper classes='player__content'>
                <div>
                    <button>
                        <i className="fas fa-step-backward"></i>
                    </button>
                    <button>
                        <i className="fas fa-play"></i>
                    </button>
                    <button>
                        <i className="fas fa-step-forward"></i>
                    </button>
                    <button>
                        <i className="fas fa-volume-off"></i>
                    </button>
                </div>
                <div>
                    <div>
                        <span>{song}</span>
                    </div>
                    <div>
                        <span>{artist} - {album}</span>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}