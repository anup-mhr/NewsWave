import React, { useEffect, useState } from 'react'
import Carousel_Item from './Carousel_Item'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Carousel(props) {
  const { country, category, apiKey, pageSize, loading, setLoading } = props
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    setLoading(true)
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&max=${pageSize}&apikey=${apiKey}`
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setLoading(false)
  }

  useEffect(() => {
    updateNews()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <section className="pt-5">
        <h2 className="carousel-title text-center mb-5 fw-bold" >{loading ? <Skeleton width={200} height={20} /> : props.title}</h2>
        <div className="container">
          {loading && <Skeleton height={250} />}
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {articles?.map((element) => {
                return <Carousel_Item key={element.newsUrl} title={element.title.slice(0, 50)}
                  description={element.description ? element.description.slice(0,) : "Singaporean national Saridewi Djamani, 45, was convicted in 2018 of trafficking over 30 gr"}
                  imgUrl={element.image ? element.image : "https://media.cnn.com/api/v1/images/stellar/prod/230615153348-01-manitoba-highway-collision.jpg?c=16x9&q=w_800,c_fill"}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  source={element.source.name} />
              })}
            </div>
          </div>
        </div>
      </section>
      {/* todo: add dot dot (. . . ) UI here  */}
    </div>
  )
}

export default Carousel

Carousel.defaultProps = {
  country: "us",
  pageSize: 3,
  category: "general"
}