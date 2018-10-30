import React from 'react';
import SelectorOption from './SelectorOption';

class MultiSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        }
        this.selectOption = this.selectOption.bind(this);
    }

    selectOption(index) {
        this.setState({ selected: index });
    }

    render() {
        return (
            <div className="multi-selector">
                {
                    this.props.children.map( (child, index) => (
                        <SelectorOption
                            key={index}
                            index={index}
                            selected={this.state.selected == index}
                            onClick={this.selectOption}
                        >
                            { child }
                        </SelectorOption>
                    ))
                }
            </div>
        )
    }
}

export default MultiSelector;