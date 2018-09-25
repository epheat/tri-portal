import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class MembersPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memberList: null,
        }

        this.getMemberList = this.getMemberList.bind(this);
    }

    getMemberList() {
        // TODO: ajax call to get list of members
        // for now, I'll return an array of dummy data
        return [
            {

            }
        ]
    }

    render() {
        return (
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionAppearTimeout={300}
                transitionLeaveTimeout={200}
                transitionAppear={true}
                transitionEnter={true}
                transitionLeave={true}
            >
                <div className="members-page">
                    <h1>The Chapter</h1>
                    <div className="member-search-bar">
                        search bar
                    </div>

                </div>
            </CSSTransitionGroup>
        )
    }
}

export default MembersPage;