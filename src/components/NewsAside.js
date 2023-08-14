import React, { useEffect, useState } from 'react'
import NewsItemList from './NewsItemList'

function NewsAside(props) {
    const { title, country, category, apiKey, pageSize } = props
    const [articles, setArticles] = useState([]);

    const updateNews = async () => {
        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&max=${pageSize}&apikey=${apiKey}`
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
    }

    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="col-lg-6">
            <h4 className='fw-bold'>{title}</h4>
            {articles?.map((element) => {
                return <NewsItemList key={element.newsUrl} title={element.title.slice(0, 38)}
                    description={element.description ? element.description.slice(0, 90) : "Singaporean national Saridewi Djamani, 45, was convicted in 2018 of trafficking over 30 gr"}
                    imgUrl={element.image ? element.image : "https://media.cnn.com/api/v1/images/stellar/prod/230615153348-01-manitoba-highway-collision.jpg?c=16x9&q=w_800,c_fill"}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    source={element.source.name} />
            })}

        </div>
    )
}

export default NewsAside

NewsAside.defaultProps = {
    country: "us",
    pageSize: 3,
    category: "general"
}