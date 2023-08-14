import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NewsItem from './NewsItem';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function SearchNews(props) {
    const { apiKey, setProgress, pageSize } = props;
    const location = useLocation();
    const searchQuery = location.state.q;
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])

    const updateNews = async () => {
        setLoading(true)
        setProgress(10)
        const url = `https://gnews.io/api/v4/search?q=${searchQuery}&sortBy=relevance&max=${pageSize}&apikey=${apiKey}`
        let data = await fetch(url);
        setProgress(50)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setProgress(100)
        setLoading(false)
    }

    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
    }, [searchQuery])
    return (
        <>
            <section className="container pt-5">
                <h2 className='text-center pb-4'>Result for {searchQuery}</h2>
                {loading && <Skeleton count={6} height={10} />}

                {!loading && <div className="row g-4">
                    {articles.map((element) => {
                        return <NewsItem key={element.url} title={element.title.slice(0, 38)}
                            description={element.description ? element.description.slice(0, 90) : "Singaporean national Saridewi Djamani, 45, was convicted in 2018 of trafficking over 30 gr"}
                            imgUrl={element.image ? element.image : "https://media.cnn.com/api/v1/images/stellar/prod/230615153348-01-manitoba-highway-collision.jpg?c=16x9&q=w_800,c_fill"}
                            newsUrl={element.url}
                            date={element.publishedAt}
                            source={element.source.name} />
                    })}
                </div>}
            </section>
        </>
    )
}

export default SearchNews

SearchNews.defaultProps = {
    pageSize: 6
}