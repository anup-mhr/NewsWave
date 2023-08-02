import React from 'react'

function NewsItemList(props) {
    const { imgUrl, title, description, author, date, source, newsUrl } = props;
    return (
        <div className="card mb-4 border-0">
            <a href={newsUrl} target='_blank' rel="noreferrer" className='text-black text-decoration-none'>
                <div className="row ">
                    <div className="col-md-5 pb-3 pb-md-0">
                        <img src={imgUrl} className="img-fluid rounded-3" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body p-0">
                            <h6 className="card-title mb-2 text-capitalize fw-bold">{source} <span >- {new Date(date).toGMTString().slice(0, 16)}</span> </h6>
                            <h2 className="mb-0" style={{ fontSize: "20px" }}>{title}</h2>
                            <p className="card-text my-0">{description}</p>
                            <div className="mt-1">
                                <b className="mb-0 fw-bold">Author</b>
                                <p className="my-0">{author ? author : "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default NewsItemList
