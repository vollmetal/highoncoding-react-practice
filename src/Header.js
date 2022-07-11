import { Component } from "react";


class Header extends Component {
    render () {
        let headerButtons = this.props.headerButtons.map((button, index) => {
            let keyName = `${button.name}-${index}`
            return (
                <li key={keyName}>
                    <a href="#">{button.name}</a>
                </li>
            )
        })

        return (
            <div className="headerDiv">
                <h1>{this.props.siteName}</h1>
                <ul className="headerButtons">
                    {headerButtons}
                </ul>
            </div>
        )
    }
}

export default Header;