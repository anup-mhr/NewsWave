import React from 'react'

function NewsItem(props) {
    const { imgUrl, title, description, author, date, source, newsUrl } = props;

    return (
        <div className="col-lg-4">
            <div className="card border-0 ">
                <a href={newsUrl} target='_blank' rel="noreferrer" className='text-black text-decoration-none'>
                    <div>
                        <img src={imgUrl} className="card-img-top rounded-2 img-fluid" alt="..." />
                    </div>
                    <div>
                        <div className="card-body  px-0">
                            <h6 className="card-title mb-3 text-capitalize fw-bold">{source}<span> -{new Date(date).toGMTString().slice(0, 16)}</span> </h6>
                            <h2 className="mb-0" style={{ fontSize: "18px" }}>{title}</h2>
                            <p className="card-text">{description}</p>
                            <div>
                                <b className="mb-0 fw-bolder">Author</b>
                                <p>{author ? author : "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default NewsItem

NewsItem.defaultProps = {
    styl: {
        image: "",
        cardBody: ""
    }
}
