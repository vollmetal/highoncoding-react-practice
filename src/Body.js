import { Component } from "react";
import Post from "./Post";
import PostFull from "./PostFull";


class Body extends Component {
    render () {


        return (
            <div>
                <Post postContent={this.props.headPost} />
                <PostFull postContent={this.props.posts}/>
            </div>
        )
    }
}

export default Body;