import React from 'react';
import FormInput from '../components/FormInput';
import { API } from 'aws-amplify';
import TriButton from '../components/TriButton';
import MultiSelector from '../components/selector/MultiSelector';
import UpDownVote from '../components/actions/UpDownVote';

class ForumNewPost extends React.Component {
    // https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y

    constructor() {
        super();
        this.state = {
            loading: false,
            response: "",
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
        this.setState({ loading: true });
        API.post('triapi', '/posts', { body: this.state.newPost }).then( response => {
            console.log(response);
            this.setState({ loading: false, response: response.success })
            // navigate to the post page for the created post
            this.props.history.push('/forum/' + response.postId);
        }).catch( err => {
            console.log(err);
            this.setState({ loading: false, response: err.message })
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
                            textarea={true}
                        />
                        <div className="tri-form-label" style={{marginTop: '5px'}}>Action</div>
                        <MultiSelector>
                            <UpDownVote />
                            <UpDownVote />
                            <UpDownVote />
                            <UpDownVote />
                        </MultiSelector>
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

                    { 
                        this.state.loading &&
                        <div className="loading">loading...</div>
                    }
                    {
                        this.state.response &&
                        <div className="api-response">{ this.state.response }</div>
                    }
                </div>
            </div>
        );
    }
}

export default ForumNewPost;