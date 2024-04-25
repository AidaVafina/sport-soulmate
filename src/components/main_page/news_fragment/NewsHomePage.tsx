// NewsHomePage.tsx

import React from 'react';
import './NewsStyle.css';

interface NewsItemProps {
    title: string;
    description: string;
    imageUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="news-item">
            <img src={imageUrl} alt="News" />
            <div className="news-title">{title}</div>
            <div className="news-description">{description}</div>
        </div>
    );
};

const NewsHomePage: React.FC = () => {
    const newsData: NewsItemProps[] = [
        {
            title: 'Неудержимый Разгром:',
            description: 'Команда "Молния" разгромила соперников со счетом 5:0',
            imageUrl: require('../../../img/main_page/news1.jpg')
        },
        {
            title: 'Спортивный Триумф: ',
            description: 'Звездный игрок установил новый рекорд в набранных очках за матч',
            imageUrl: require('../../../img/main_page/news2.jpg')
        },
        {
            title: 'Неожиданное Возвращение: ',
            description: 'Запасная команда обыгрывает фаворитов в захватывающем поединке',
            imageUrl: require('../../../img/main_page/new3.jpg')
        },
        {
            title: 'Решающий Момент:',
            description: 'Отличная командная работа приводит к драматической победе в последних минутах игры',
            imageUrl: require('../../../img/main_page/news4.jpg')
        },
    ];

    return (
        <div className="news-homepage">
            <h1 className="news-homepage-title">Новости спортивных событий</h1>
            <div className="news-grid">
                {newsData.map((news, index) => (
                    <NewsItem key={index} title={news.title} description={news.description} imageUrl={news.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default NewsHomePage;
