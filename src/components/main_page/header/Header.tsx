import React from 'react';
import { Link } from 'react-router-dom';
import './headerr.css';

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <nav>
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/about" className="nav-link">О нас</Link>
                <Link to="/chat" className="nav-link">Чат</Link>
                <Link to="/search" className="nav-link">Поиск</Link>
                <Link to="/news" className="nav-link">Новости</Link>
            </nav>
            <button className="button">Войти</button>
        </header>
    );
};

export default Header;