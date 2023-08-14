import React, { useState } from 'react'
import Carousel from './Carousel'
import News from './News'
import NewsAside from './NewsAside'

function Homepage(props) {
    const [loading, setLoading] = useState(false)
    const { apiKey, setProgress } = props

    return (
        <div>
            {setProgress(10)}
            {/* <Carousel title="Trending" apiKey={apiKey} loading={loading} setLoading={setLoading} /> */}
            <h2 className="carousel-title text-center mt-5 fw-bold" >Trending</h2>
            <News apiKey={apiKey} setProgess={props.setProgress} />
            {setProgress(30)}
            <Carousel title="Most Popular posts" apiKey={apiKey} loading={loading} setLoading={setLoading} category="health"/>
            {setProgress(50)}
            <section className="container pt-5">
                <div className="row">
                    <NewsAside title="sports" category="sports" apiKey={apiKey} />
                    <NewsAside title="Business" category="business" apiKey={apiKey} />
                </div>
                {setProgress(80)}
            </section>
            {setProgress(100)}
        </div>
    )
}

export default Homepage
