import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../Context';
import BlogCard from './BlogCard';

function BlogSection() {
    return (
        <Consumer>
            {(value) => {
                const { blogs } = value;
                return (
                    <div className="container text-center my-5">
                        <h1 className="font-weight-light">My<span className="text-info">Blog</span></h1>
                        <div className="lead pb-5">I blogs will be like this</div>
                        <div className="row pt-3">
                            {
                                blogs.slice(0, 3).map((blog) => (
                                    <div key={blog.id} className="col-12 col-md-4 my-2">
                                        <BlogCard id={blog.id} title={blog.title} excerpt={blog.excerpt} imageUrl={blog.imageUrl} />
                                    </div>
                                ))}
                        </div>
                        <div className="my-5">
                            <Link to="/allblogs" className="text-dark text-right">
                                <h5> See my blogs <i className="fa fa-arrow-right align-middle"></i></h5>
                            </Link>
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );

}

export default BlogSection;