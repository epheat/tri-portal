import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import MemberGrid from '../components/MemberGrid';
import MemberList from '../components/MemberList';

class MembersPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memberList: [],
            ecMembers: [],
        }

        this.getMemberList = this.getMemberList.bind(this);
    }

    componentDidMount() {
        this.setState({ memberList: this.getMemberList(), ecMembers: this.getMemberList() });
    }

    getMemberList() {
        // TODO: ajax call to get list of members
        // for now, I'll return an array of dummy data
        return [
            {
                id: 1,
                name: "Evan Heaton",
                role: "admin",
                pledgeClass: "Fall '14",
            },
            {
                id: 2,
                name: "Thomas Morgan",
                role: "admin",
                pledgeClass: "Fall '14",
            },
            {
                id: 3,
                name: "David Cottrell",
                role: "admin",
                pledgeClass: "Fall '14",
            },
            {
                id: 4,
                name: "Zach Marshall",
                role: "admin",
                pledgeClass: "Fall '14",
            },
            {
                id: 5,
                name: "Andy Conway",
                role: "brother",
                pledgeClass: "Fall '14",
            },
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
                    <div className="page-content">
                        <h1>The Chapter</h1>
                        <div className="member-search-bar">
                            search bar
                        </div>
                        <MemberList 
                            members={this.state.ecMembers}
                        />
                        <MemberGrid
                            members={this.state.memberList}
                        />
                    </div>
                </div>
            </CSSTransitionGroup>
        )
    }
}

export default MembersPage;