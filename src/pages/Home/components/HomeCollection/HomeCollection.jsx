import React from 'react';
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem';

const collections = [
    {
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgti26GQ42QxoIgwPEf7e97NY54BcqGnBA_sOZQXvI7p2RtdzstofRqA6TRjtE5nLVs5gQkWpcFx5a0HZViIaD6KNNUBiAa1cS_wUr3j1ntXpLmb2J6RnRVq9BluRvaCCRHUGDNzWhfyZlB7_ZFL0TXJUyaZmK0mlNiYaTpj2qpfiprL8wGxM1VBBaYjnI/s320/d40aa90e168be66677a95d77adce727b.jpg",
        title: "Цветы для особых моментов",
        comment: "Порадуйте близких на день рождения, юбилей или годовщину — у нас найдутся букеты для любого важного события.",
        reverse: false
    },
    {
        image: "https://pandora.airun.one/media/cache/9c/ee/9cee168928e8b9bedbaf78f08f97b574.jpg",
        title: "Цветы без повода",
        comment: "Иногда самые тёплые эмоции — это просто так. Дарите цветы, чтобы поднять настроение себе и любимым без особого повода.",
        reverse: true
    },
    {
        image: "https://pandora.airun.one/media/cache/32/31/3231eca600b393f41fa485b704052c29.jpg",
        title: "Букеты для вдохновения",
        comment: "Оформите рабочее место или дом стильной композицией — свежие цветы всегда создают атмосферу уюта и вдохновения.",
        reverse: false
    }
];

const HomeCollection = () => (
    <div className="home-collection">
        <div className="page-container">
            {collections.map((item, idx) => (
                <HomeCollectionItem
                    key={idx}
                    image={item.image}
                    title={item.title}
                    comment={item.comment}
                    reverse={item.reverse}
                />
            ))}
        </div>
    </div>
);

export default HomeCollection;