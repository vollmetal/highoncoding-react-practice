const { Component } = require("react");



class Post extends Component {
    render () {
        let postContentElement = this.props.postContent.map((content, index) => {
            let keyName = `${content}-${index}`
            return (
            <li key={keyName}>
                <h3 className="postText">{content.header}</h3>
                <p className="postText">{content.description}</p>
            </li>
            )
        });
        return (
            <ul className="postHolder postHead">
                {postContentElement}
            </ul>
        );

    };
};

export default Post;