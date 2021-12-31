import './Wrapper.css'

export default function Wrapper({ children, classes = '' }) {
    return (
        <div className={`wrapper ${classes}`}>
            {children}
        </div>
    )
}