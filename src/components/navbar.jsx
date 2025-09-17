import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Ensure you're importing from react-router-do

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (index) => {
        if (activeItem === index) {
            setActiveItem(null);
        } else {
            setActiveItem(index);
        }
    };

    return (
        <>
           <NavBar/>
            <div className="burger-menu" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
            </div>

            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-list">
                    <li className="navbar-item" onClick={() => handleItemClick(0)}>
                        <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(1)}>
                        <Link to="/fodboldgolf" className="navbar-link" onClick={() => setIsOpen(false)}>
                            Fodboldgolf
                        </Link>
                        <ul className={`navbar-dropdown ${activeItem === 1 ? 'active' : ''}`}>
                            <li><Link to="/bog" className="navbar-link" onClick={() => setIsOpen(false)}>Jeg er med i en bog!</Link></li>
                            <li><Link to="/baner" className="navbar-link" onClick={() => setIsOpen(false)}>Baner</Link></li>
                        </ul>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(2)}>
                        <Link to="/sponsors" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Mine sponsorer</p>
                        </Link>
                        <ul className={`navbar-dropdown ${activeItem === 2 ? 'active' : ''}`}>
                            <li><Link to="/bil" className="navbar-link" onClick={() => setIsOpen(false)}>Min Bil</Link></li>
                        </ul>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(3)}>
                        <Link to="/galleri" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Galleri</p>
                        </Link>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(4)}>
                        <Link to="/fodbold" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Fodbold</p>
                        </Link>
                        <ul className={`navbar-dropdown ${activeItem === 4 ? 'active' : ''}`}>
                            <li><Link to="/broenby" className="navbar-link" onClick={() => setIsOpen(false)}>Brøndby</Link></li>
                            <li><Link to="/liverpool" className="navbar-link" onClick={() => setIsOpen(false)}>Liverpool</Link></li>
                            <li><Link to="/barcalona" className="navbar-link" onClick={() => setIsOpen(false)}>Barcelona</Link></li>
                            <li><Link to="/fif" className="navbar-link" onClick={() => setIsOpen(false)}>FIF-Hillerød</Link></li>
                        </ul>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(5)}>
                        <Link to="/salg" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Salg</p>
                        </Link>
                    </li>
                    <li className="navbar-item" onClick={() => handleItemClick(6)}>
                        <Link to="/loeb" className="navbar-link" onClick={() => setIsOpen(false)}>
                            <p>Sport inkl. løb</p>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
                            ⚽️⛳️🕳
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
