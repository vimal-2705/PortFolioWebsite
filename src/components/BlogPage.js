import React from 'react';
import { Consumer } from "../Context";
import ReactMarkdown from "react-markdown";
import { Component } from 'react';
import axios from "axios";

class BlogPage extends Component {
    state = {
        imageUrl: "",
        title: "",
        body: "",
    }

    async componentDidMount() {
        const response = await axios.get(`http://127.0.0.1:5000/api/blog?id=${this.props.match.params.id}`);

        const isSuccessful = response.data.isSuccessful;

        if (isSuccessful) {
            this.setState({
                imageUrl: response.data.result.imageUrl,
                title: response.data.result.title,
                body: response.data.result.body,
            });
        }
    }

    render() {
        const { imageUrl, title, body } = this.state;
        return (
            <div className="container my-5 py-5 markdown">
                <div className="justify-content-center">
                    <img src={imageUrl} alt={title} className="w-100" />
                </div>
                <h1 className="text-center font-weight-light my-5">{title}</h1>
                <ReactMarkdown children={body} />
            </div>
        );
    }
}

export default BlogPage;