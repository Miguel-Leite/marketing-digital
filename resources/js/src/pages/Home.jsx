import {NavLink} from 'react-router-dom'

export function Home() {
    return (
        <div>
            <header className='header_page'>
                <nav className="nav_page">
                    <NavLink to="/" className="nav_brand"></NavLink>
                </nav>
            </header>
        </div>
    )
}
