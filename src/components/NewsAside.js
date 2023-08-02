import React, { useEffect, useState } from 'react'
import NewsItemList from './NewsItemList'

function NewsAside(props) {
    const { title, country, category, apiKey, pageSize} = props
    const [page, setPage] = useState(1)
    const [articles, setArticles] = useState([]);

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pagesize=${pageSize}`;
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
            {articles.map((element) => {
                return <NewsItemList key={element.newsUrl} title={element.title.slice(0, 38)}
                    description={element.description ? element.description.slice(0, 90) : "Singaporean national Saridewi Djamani, 45, was convicted in 2018 of trafficking over 30 gr"}
                    imgUrl={element.urlToImage ? element.urlToImage : "https://media.cnn.com/api/v1/images/stellar/prod/230615153348-01-manitoba-highway-collision.jpg?c=16x9&q=w_800,c_fill"}
                    newsUrl={element.url}
                    author={element.author}
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