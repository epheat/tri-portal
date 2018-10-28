import React from 'react';
import { API } from 'aws-amplify';
import Comment from '../components/Comment';

class ForumPostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { post: null, loading: true }
    }

    componentWillMount() {
        // ajax call to load post from post_id
        API.get('triapi', '/posts/' + this.props.match.params.post_id).then( response => {
            console.log(response);
            this.setState({ loading: false, post: response[0], error: null });
        }).catch( err => {
            console.log(err);
            this.setState({ loading: false, error: err.message });
        })
    }

    render() {
        return (
            <div className="forum-post-view">
                <div className="page-content">
                    {
                        this.state.loading ? <div>loading</div>
                        :
                        (
                            <div>
                                <h1>{ this.state.post.title }</h1>
                                <h3>{ this.state.post.author_username }</h3>
                                <p>{ this.state.post.content }</p>
                            </div>
                        )
                    }
                    <div className="comments-container">
                        <textarea />
                        {
                            !this.state.loading && 
                            this.state.post.comments &&
                            this.state.post.comments.map( comment => 
                                (<Comment
                                    key={comment.comment_id}
                                    comment={comment}
                                />)
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ForumPostView;