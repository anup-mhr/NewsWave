import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Proptypes from 'prop-types'


function News(props) {
    const location = useLocation()
    const { country, category, apiKey, pageSize, setProgress } = props

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)


    const updateNews = async () => {
        setLoading(true)
        if (location.pathname === "/") {
            const url = `https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&max=${pageSize}&apikey=${apiKey}`
            let data = await fetch(url);
            let parsedData = await data.json()
            setArticles(parsedData.articles)
        } else {    //This has progress
            setProgress(10)
            const url = `https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&max=${pageSize}&apikey=${apiKey}`
            let data = await fetch(url);
            setProgress(50)
            let parsedData = await data.json()
            setArticles(parsedData.articles)
            setProgress(100)
        }
        setLoading(false)
    }

    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
    }, [location.pathname])

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1,);
    }

    return (
        <>
            <section className="container pt-5">
                {location.pathname === "/" ? "" : <h2 className='text-center pb-4'>Top {capitalize(location.pathname.split("/")[1])} Headlines</h2>}
                {loading && <Skeleton count={6} height={10} />}

                {!loading && <div className="row g-4">
                    {articles?.map((element) => {
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