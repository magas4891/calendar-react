import React from 'react';

class Day extends React.Component {
    render() {
        return (
            <div className={ this.props.className }>
                { this.props.value }
            </div>
        )
    }
}

export default Day;