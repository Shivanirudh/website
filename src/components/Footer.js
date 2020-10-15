import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        const {
            copyright
        } = this.props.data;
        return (
            <div className="footer">
                &copy; {copyright}
            </div>
        )
    }
}

export default Footer
