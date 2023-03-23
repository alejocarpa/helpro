import './AuthLayout.css';

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <>
            <div className="container">
                <h2>{ title }</h2>
                <div style={{ marginTop: '20px' }}>
                    { children }
                </div>
            </div>
        </>
    )
}
