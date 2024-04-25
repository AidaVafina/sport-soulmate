import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={{ backgroundImage: `url(${require('../img/main_page/background.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
            <p style={{ position: 'absolute', top: 432, left: 59, fontSize: 75,fontWeight: 'bold', color: 'white' }}>
                Хочешь заняться спортом, но не с кем? Заполняй <span style={{ color: '#4E80FF', cursor: 'pointer' }}>анкету</span> и найди своего спортивного SoulMate!
            </p>
        </div>
    );
};

export default Home;