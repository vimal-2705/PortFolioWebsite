import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="w-100 mt-5">
            <div className="container-fluid text-center align-items-center w-100" style={{ backgroundColor: "black" }}>
                <div className="pt-5">
                    <h2 className="text-light pb-3"> Interested in working with me </h2>
                    <Link to="/contact">
                        <button className="btn btn-outline-light btn-lg pt-2">Lets talk</button>
                    </Link>
                </div>
                <div className="row pt-4">
                    <div className="col-12 col-md-4 p-2">
                        <h3 className="text-info pt-3">More Links</h3>
                        <a href="/" className="text-light text-decoration-none d-block pt-2 pb-1"> Blogs </a>
                        <Link to="/" className="text-light text-decoration-none d-block p-1"> Home </Link>
                        <a href="/" className="text-light text-decoration-none d-block p-1"> Projects </a>
                        <Link to="/contact" className="text-light text-decoration-none d-block p-1"> Contact </Link>
                        <Link to="/write-a-recommendation" className="text-light text-decoration-none"> Write a Recommendation
                        <i className="fa fa-heart text-light"></i>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 text-light p-4 text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti maxime eaque porro ratione atque iusto quia unde voluptatem. Quas illo dicta quis, fugit enim officia obcaecati neque numquam nisi illum natus molestias itaque temporibus unde est qui voluptatum eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non blanditiis commodi unde maiores placeat earum laborum rem alias vel! </p>
                    </div>
                    <div className="col-12 col-md-4 p-2">
                        <h3 className="text-info py-3">Social</h3>
                        <a href="/"><i className="fab fa-linkedin text-light h2 d-block"></i></a>
                        <a href="/"><i className="fab fa-github text-light h2 d-block"></i></a>
                        <a href="/"><i className="fas fa-envelope text-light h2 d-block"></i></a>
                    </div>
                </div>
                <div className="text-muted py-3">
                    <p>Copyright c Vimal 2021</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;