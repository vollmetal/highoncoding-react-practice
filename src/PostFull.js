import { Component } from "react";


class PostFull extends Component {

    render () {
        let postContentElement = this.props.postContent.map((content, index) => {
            let keyName = `${content}-${index}`
            return (
            <li  key={keyName}>
                <h3 className="postText">{content.header}</h3>
                <p className="postText">{content.description}</p>
                <div className="postCommentsLikes">
                    <p>Comments: {content.comments}</p>
                    <p>Comments: {content.likes}</p>
                </div>
            </li>
            )
        });
        return (
            <ul className="postHolder">
                {postContentElement}
            </ul>
        );

    };

};

export default PostFull;