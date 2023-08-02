import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NewsItem from './NewsItem';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import InfiniteScroll from 'react-infinite-scroll-component';


function SearchNews(props) {
    const { apiKey, setProgress, pageSize } = props;
    const location = useLocation();
    const searchQuery = location.state.q;

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState()

    const updateNews = async () => {
        setLoading(true)
        setProgress(10)
        const url = `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=popularity&apiKey=${apiKey}&page=${page}&pagesize=${pageSize}`;
        let data = await fetch(url);
        setProgress(50)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setProgress(100)
        setLoading(false)
    }
    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=popularity&apiKey=${apiKey}&page=${page + 1}&pagesize=${pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
    }, [searchQuery])
    return (
        <>
            <InfiniteScroll
                style={{ width: "90%", margin: "0 auto" }}
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Skeleton count={6} height={10} />}
            >
                <section className="container pt-5">
                    <h2 className='text-center pb-4'>Result for {searchQuery}</h2>
                    {loading && <Skeleton count={6} height={10} />}

                    {!loading && <div className="row g-4">
                        {articles.map((element) => {
                            return <NewsItem key={element.url} title={element.title.slice(0, 38)}
                                description={element.description ? element.description.slice(0, 90) : "Singaporean national Saridewi Djamani, 45, was convicted in 2018 of trafficking over 30 gr"}
                                imgUrl={element.urlToImage ? element.urlToImage : "https://media.cnn.com/api/v1/images/stellar/prod/230615153348-01-manitoba-highway-collision.jpg?c=16x9&q=w_800,c_fill"}
                                newsUrl={element.url}
                                author={element.author}
                                date={element.publishedAt}
                                source={element.source.name} />
                        })}
                    </div>}
                </section>
            </InfiniteScroll>
        </>
    )
}

export default SearchNews

SearchNews.defaultProps = {
    pageSize: 6
}