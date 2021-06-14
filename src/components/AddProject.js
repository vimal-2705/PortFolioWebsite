import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../Context";
import { v4 as uuid } from "uuid";
import axios from "axios";

class AddProject extends Component {
    state = {
        imageUrl: "",
        title: "",
        excerpt: "",
        description: "",
        body: "",
        submitMessage: "",
        submitMessageTextColor: "",
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onBodyChange = (value) => {
        this.setState({
            description: value,
        });
    };

    onSubmit = async (handler, event) => {
        event.preventDefault();

        const newProject = {
            id: uuid(),
            imageUrl: this.state.imageUrl,
            title: this.state.title,
            excerpt: this.state.excerpt,
            body: this.state.description,
        };

        const response = await axios.post("http://127.0.0.1:5000/api/project", newProject);

        const isSuccessful = response.data.isSuccessful;

        if (isSuccessful) {
            this.setState({
                submitMessage: `Project published successfully`,
                submitMessageTextColor: "text-info",
            });
        } else {
            this.setState({
                submitMessage: "Publish failed",
                submitMessageTextColor: "text-danger",
            });
        }

        handler("ADD_PROJECT", newProject);
    };

    render() {
        return <Consumer>
            {value => {
                const { imageUrl, title, description, submitMessage, submitMessageTextColor } = this.state;
                const { handler } = value;
                return (
                    <div className="container-fluid my-5 py-5">
                        <h1 className="text-center my-5 font-weight-light">
                            Add <span className="text-info"> Project </span>
                        </h1>
                        <div className="row px-3 px-lg-5">
                            <div className="col-12 col-lg-6 px-lg-5">
                                <form onSubmit={this.onSubmit.bind(this, handler)}>
                                    <div className="form-group">
                                        <label htmlFor="imageUrl">Featured Image Url *</label>
                                        <input type="text" name="imageUrl" id="imageUrl" className="form-control" onChange={this.onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">Title *</label>
                                        <input type="text" name="title" id="title" className="form-control" onChange={this.onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="excerpt">Excerpt *</label>
                                        <input type="text" name="excerpt" id="excerpt" className="form-control" onChange={this.onChange} required />
                                    </div>
                                    <SimpleMDE
                                        onChange={this.onBodyChange}
                                        options={{
                                            hideIcons: ["preview", "side-by-side", "fullscreen"],
                                        }}
                                    />
                                    <button type="submit" className="btn btn-dark btn-block my-5" style={{ backgroundColor: "black" }}> Publish </button>
                                </form>
                                <div className="py-5 mx-2 text-center">
                                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 markdown">
                                <div className="justify-content-center">
                                    <img src={imageUrl} alt={title} />
                                </div>
                                <h1 className="text-center font-weight-light my-5">{title}</h1>
                                <ReactMarkdown children={description} />
                            </div>
                        </div>
                    </div>
                );
            }}
        </Consumer>
    }
}

export default AddProject;