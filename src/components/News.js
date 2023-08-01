import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Proptypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
    const location = useLocation()
    const { country, category, apiKey, pageSize, setProgress } = props

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        setLoading(true)
        if (location.pathname === "/") {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pagesize=${pageSize}`;
            console.log(url)
            let data = await fetch(url);
            let parsedData = await data.json()
            setArticles(parsedData.articles)
        } else {
            setProgress(10)
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pagesize=${pageSize}`;
            console.log(url)
            let data = await fetch(url);
            setProgress(50)
            let parsedData = await data.json()
            setArticles(parsedData.articles)
            setProgress(100)
        }
        setLoading(false)

    }

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pagesize=${pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        updateNews()
    }, [location.pathname])

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1,);
    }

    return (
        <>
            <InfiniteScroll
                style={{ width: "90%", margin: "0 auto" }}
                dataLength={articles.length}
                next={location.pathname === "/" ? "" : fetchMoreData}
                hasMore={location.pathname === "/" ? false : articles.length !== totalResults}
                loader={<Skeleton count={6} height={10} />}
            >
                <section className="container pt-5">
                    {location.pathname === "/" ? "" : <h2 className='text-center pb-4'>Top {capitalize(location.pathname.split("/")[1])} Headlines</h2>}
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

export default News

News.defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general"
}
News.propTypes = {
    country: Proptypes.string,
    category: Proptypes.string
};