import React from "react"
import {Link} from "react-router-dom"

function Header() {
  return (
      <header id="site-header" className="site-header site-header-4 header-static">
            <div className="header-desktop">
                <div className="octf-main-header is-fixed">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-logo align-self-center">
                                <div id="site-logo" className="site-logo">
                                    <Link to="index.html">
                                        <img src="" alt="Progrisaas" className=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-menu">
                                <nav id="site-navigation" className="main-navigation">
                                    <ul className="menu">
                                        {/* <li className="menu-item-has-children"><Link to="blog.html">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="blog.html">Blog Listing</Link></li>
                                                <li><Link to="blog-grid.html">Blog Grid</Link></li>
                                                <li><Link to="post.html">Blog Single</Link></li>
                                            </ul>
                                        </li> */}
                                        <li><Link to="team">Team</Link></li>
                                        <li><Link to="process">Process</Link></li>
                                        <li><Link to="contact">Contacts</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-cta align-self-center">
                                <div className="octf-btn-cta justify-content-end">

                                    <div className="octf-search octf-cta-header align-self-center">
                                        <div className="toggle_search octf-cta-icons">
                                            <i className="ot-flaticon-magnifiying-glass"></i>
                                        </div>
                                        <div className="h-search-form-field collapse">
                                            <div className="search-overlay"></div>
                                            <div className="h-search-form-inner">
                                                <i className="ot-flaticon-close"></i>
                                                <div className="container">
                                                    <form role="search" method="get" id="hsearch-form" className="search-form">
                                                        <span className="pre-text">What are you looking for?</span>
                                                        <input type="search" className="search-field" placeholder="Enter Keyword…" name="s" />
                                                        <button type="submit" className="search-submit"><i className="ot-flaticon-magnifiying-glass"></i></button>
                                                    </form>
                                                </div>
                                            </div>                                  
                                        </div>
                                    </div>

                                    <div className="octf-header-btn octf-cta-header">
                                        <div className="btn-cta-group btn-cta-header">
                                            <Link className="octf-btn octf-btn-second" to="contact.html">Try For Free</Link>
                                        </div>
                                    </div>
                                    
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header_mobile">
                <div className="container-fluid">
                    <div className="octf-mainbar-row octf-row">
                        <div className="octf-col">
                            <div className="mlogo_wrapper clearfix">
                                <div className="mobile_logo">
                                    <Link to="index.html">
                                        <img src="images/logo.svg" alt="Progrisaas" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="octf-col justify-content-end">
                            <div className="octf-search octf-cta-header align-self-center">
                                <div className="toggle_search octf-cta-icons">
                                    <i className="ot-flaticon-magnifiying-glass"></i>
                                </div>
                        
                                <div className="h-search-form-field collapse">
                                    <div className="search-overlay"></div>
                                    <div className="h-search-form-inner">
                                        <i className="ot-flaticon-close"></i>
                                        <div className="container">
                                            <form role="search" method="get" id="hsearch-form" className="search-form">
                                                <span className="pre-text">What are you looking for?</span>
                                                <input type="search" className="search-field" placeholder="Enter Keyword…" name="s" />
                                                <button type="submit" className="search-submit"><i className="ot-flaticon-magnifiying-glass"></i></button>
                                            </form>
                                        </div>
                                    </div>                                  
                                </div>
                            </div>
                            <div id="mmenu-toggle" className="mmenu-toggle align-self-center">
                                <button><i className="ot-flaticon-menu-of-three-lines"></i></button>
                            </div>
                            <div className="site-overlay mmenu-overlay"></div>
                        </div>
                        <div id="mmenu-wrapper" className="mmenu-wrapper on-right">
                            <div className="mmenu-inner">
                                <Link className="mmenu-close" to="#"><i className="ot-flaticon-right-arrow"></i></Link>
                                <div className="mobile-nav">
                                    <ul id="menu-main-menu" className="mobile_mainmenu none-style">
                                        
                                        <li className="menu-item-has-children"><Link to="#">Portfolio</Link>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children"><Link to="portfolio-grid.html">Portfolio Grid</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link to="portfolio-2-column.html">2 Columns</Link></li>
                                                        <li><Link to="portfolio-grid.html">3 Columns</Link></li>
                                                        <li><Link to="portfolio-4-column.html">4 Columns</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><Link to="portfolio-masonry.html">Portfolio Masonry</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link to="portfolio-masonry-2col.html">2 Columns</Link></li>
                                                        <li><Link to="portfolio-masonry.html">3 Columns</Link></li>
                                                        <li><Link to="portfolio-masonry-4col.html">4 Columns</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="portfolio-details.html">Portfolio Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><Link to="blog.html">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="blog.html">Blog Listing</Link></li>
                                                <li><Link to="blog-grid.html">Blog Grid</Link></li>
                                                <li><Link to="post.html">Blog Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="contact.html">Contacts</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header