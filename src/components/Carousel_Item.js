import React from 'react'

function Carousel_Item(props) {
    const { imgUrl, title, description, author, date, source, newsUrl } = props;

    return (
        <div className="carousel-item active">
            <a href={newsUrl} target='_blank' rel="noreferrer" className='text-black text-decoration-none'>
                <div className="card d-lg-flex flex-lg-row justify-content-between border-top-0 border-start-0 border-bottom-0 rounded-0">
                    <div className='pe-lg-4'>
                        <img src={imgUrl} className="card-img-top rounded-2" alt="..." style={{ height: "30rem" }} />
                    </div>
                    <div className="card-body px-0 p-lg-3">
                        <h6 className="card-title mb-3 text-capitalize" style={{ fontWeight: "600" }}>{source} <span> — {new Date(date).toGMTString().slice(0, 16)}</span> </h6>
                        <h2 className="carousel-title mb-0 fw-bold">{title}</h2>
                        <p className="card-text">{description}</p>
                        <div>
                            <b className="mb-0"><strong>Author</strong></b>
                            <p style={{ fontSize: "13px" }}>{author ? author : "Unknown"}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Carousel_Item
