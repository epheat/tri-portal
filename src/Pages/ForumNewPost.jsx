import React from 'react';
import FormInput from '../components/FormInput';
import { API } from 'aws-amplify';
import TriButton from '../components/TriButton';

class ForumNewPost extends React.Component {
    // https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y

    constructor() {
        super();
        this.state = {
            newPost: {
                title: "",
                content: "",
                // TODO: need to think more about how to implement permissions on posts.
                permissions: {},
            }
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.submitNewPost = this.submitNewPost.bind(this);
    }

    updateTitle(e) {
        let value = e.target.value;
        this.setState( prevState => ({
            newPost: {...prevState.newPost, title: value}
        }))
    }
    updateContent(e) {
        let value = e.target.value;
        this.setState( prevState => ({
            newPost: {...prevState.newPost, content: value}
        }))
    }

    submitNewPost() {
        API.post('triapi', '/posts', { body: this.state.newPost }).then( response => {
            console.log(response);
            // return the generated post_id?
            // navigate to forum page, forumPost page?
        }).catch( err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="forum-new-post-page">
                <div className="page-content">
                    <h1>Create a New Post:</h1>
                    <div className="form-container">
                        <FormInput
                            fieldName="Title"
                            value={this.state.newPost.title}
                            callback={this.updateTitle}
                        />
                        <FormInput
                            fieldName="Content"
                            value={this.state.newPost.content}
                            callback={this.updateContent}
                        />
                    </div>
                    <TriButton
                        text="Submit post"
                        type="success"
                        onClick={this.submitNewPost}
                    />
                    <TriButton
                        to="/forum"
                        text="Cancel"
                        type="danger"
                    />
                </div>
            </div>
        );
    }
}

export default ForumNewPost;