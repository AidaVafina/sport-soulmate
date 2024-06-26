import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/header.sass';
import logo from '../../assets/chat/logo_black.png';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleButtonClick = () => {
        if (isAuthenticated) {
            navigate('/account');
        } else {
            navigate('/');
        }
    };

    const handleChatClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!isAuthenticated) {
            event.preventDefault();
            navigate('/');
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="chat-header-container">
            <nav className="nav-container">
                <img src={logo} alt="Logo" className="chat-logo" />
                <div className="nav-links">
                    <Link to="/home" className="nav-link">Главная</Link>
                    <a href="#about-section" className="nav-link">О нас</a>
                    <Link to="/chat" className="nav-link" onClick={handleChatClick}>Чат</Link>
                    <Link to="/search" className="nav-link">Поиск</Link>
                    <a href="#news-section" className="nav-link">Новости</a>
                </div>
            </nav>
            <div className="button-container">
                {isAuthenticated ? (
                    <>
                        <button className="button" onClick={handleButtonClick}>Личный кабинет</button>
                        <button className="button" onClick={handleLogout}>Выйти</button>
                    </>
                ) : (
                    <button className="button" onClick={handleButtonClick}>Войти</button>
                )}
            </div>
        </header>
    );
};

export default Header;
