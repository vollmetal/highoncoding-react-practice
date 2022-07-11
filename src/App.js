import logo from './logo.svg';
import './App.css';
import Body from './Body';
import Header from './Header';

function App() {
  let posts = [{header: "This is a post", description: "this is a post description", comments: 15, likes: 45}, {header: "This is a post 2", description: "this is a post description 2", comments: 12, likes: 124}]
  let headPost = [{header: "This is a post", description: "this is a post description"}]
  let siteName = "HighOnCoding"
  let headerButtons = [{name: "Home"}, {name: "Categories"}]

  return (
    <div className="App">
      <Header siteName = {siteName} headerButtons = {headerButtons}/>
      <Body posts = {posts} headPost={headPost}/>
    </div>
  );
}

export default App;
