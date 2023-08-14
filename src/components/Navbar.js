import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [search , setSearch] = useState("")
    const handleSubmit = (e)=> {
        e.preventDefault();
        navigate("/search",{state:{q:search}})
        setSearch("")
    }
    return (
        <nav className="navbar border border-bottom-2 py-3">
            <div className="container d-flex justify-content-start flex-column flex-md-row">

                <div className="col-md-6 order-1 order-md-2 text-center ">
                    <Link className="logo navbar-brand text-uppercase" to="/">NewsWave</Link>
                </div>
                <div className="col-md-3 col-12 order-2 order-md-3 text-end d-flex justify-content-between align-items-center mb-2 mb-md-0">
                    <ul className="list d-flex mb-0 p-0">
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className=" order-3 order-md-1 col-md-3 col-12">
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control rounded-5" type="search" placeholder=" Search..." aria-label="Search" value={search} onChange={e=>{setSearch(e.target.value)}}/>
                    </form>
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Sections</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/business"?"active":""}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/entertainment"?"active":""}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/world"?"active":""}`} to="/world">World</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/general"?"active":""}`} to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/health"?"active":""}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/science"?"active":""}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/sports"?"active":""}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/technology"?"active":""}`} to="/technology">Technology</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
