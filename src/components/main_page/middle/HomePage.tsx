interface TitleDescriptionProps {
    title: string;
    description: string;
    top: number;
    left: number;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({ title, description, top, left }) => {
    const titleStyle: React.CSSProperties = {
        color: '#201151',
        fontSize: '35px',
        fontWeight: 'bold',
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`
    };

    const descriptionStyle: React.CSSProperties = {
        color: 'black',
        fontSize: '18px',
        fontWeight: 'lighter',
        position: 'absolute',
        top: `${top + 47}px`,
        left: `${left}px`,
        maxWidth: '500px'
    };

    return (
        <>
            <div style={titleStyle}>{title}</div>
            <div style={descriptionStyle}>{description}</div>
        </>
    );
};

const HomePage = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${require('../../../img/main_page/bck.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '184vh' }}>

                <div style={{
                    position: 'absolute',
                    top: '965px',
                    left: '57px',
                    fontSize: '35px',
                    color: '#201151',
                    fontWeight: 'bold',
                    lineHeight: '51px'
                }}>
                    SportSoulMate
                    <span style={{ fontWeight: 'lighter',color: '#fffff' }}> - это онлайн-платформа, где ты можешь найти своего идеального спортивного партнера для игр и тренировок. </span>
                </div>

                <TitleDescription
                    title="Персонализированный поиск"
                    description="Забудь о том, чтобы бесконечно искать подходящего партнера! SportSoulMate предоставляет тебе уникальную возможность настроить фильтры по типу спорта, уровню подготовки и времени."
                    top={1200 }
                    left={705}
                />

                <TitleDescription
                    title="Чат и обмен опытом"
                    description="Наш встроенный чат позволяет тебе не только договариваться о встречах, но и обмениваться опытом, советами и мотивацией. Найди новых друзей, с которыми можно поднимать друг друга на новые высоты!"
                    top={1437}
                    left={705}
                />

                <TitleDescription
                    title="Новости спортивных событий"
                    description="Будь в курсе последних новостей спортивного мира прямо на нашей платформе. Читай обзоры, анализ и интересные статьи о том, что происходит в мире спорта, чтобы быть всегда в теме и обсуждать горячие темы с новыми друзьями."
                    top={1674}
                    left={705}
                />
            </div>
        </div>
    );
};

export default HomePage;