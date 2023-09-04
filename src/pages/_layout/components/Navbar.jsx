import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink
                className='link parent-item capitalize nav-link'
                to="home">Home</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="login">Login</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="about">About</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="companies">List Companies</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="offers">List Offers</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="menu">Menu JSON</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="debounce">Debounce Time</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="suggestions">Suggestions</NavLink >
             <NavLink
                className='link parent-item capitalize nav-link'
                to="keywords">Add Keywords</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="articles">Add Articles</NavLink >
            <NavLink
                className='link parent-item capitalize nav-link'
                to="filterarticles">Filter Articles</NavLink >
        </nav>
    )
}

export default Navbar