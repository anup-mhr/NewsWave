import React, { useState } from 'react'

function NewsLetter() {
    const [email, setEmail] = useState("")
    
    return (
        <section className="py-y bg-light mx-md-3 mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="content">
                            <h4 className="fw-bold">Subscribe to newsletter</h4>
                            <form className="row align-items-center">
                                <div className=" col-md-8">
                                    <input type="email" className="form-control px-3 py-2 border-black border-opacity-25 rounded mb-3 mb-md-0"
                                        placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="col-md-4 h-100">
                                    <button className="btn btn-primary p-2 rounded-5 w-100 text-uppercase" style={{ fontSize: ".7rem", letterSpacing: "2px" }} type="submit" onClick={e => { e.preventDefault(); setEmail("") }}>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
