import React, { useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "AA", body: "WW"},
    {id: 2, title: "QQ", body: "DD"},
    {id: 3, title: "CC", body: "NN"}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) =>{
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }



  return (
    <div className="App">
      <PostForm create ={createPost}/>
      <hr style={{margin: '15px 0 '}} />
      <div>
        {/* 1:12:16 */}
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue= 'Sort by'
          options={[
            {value: 'title', name : 'Name'},
            {value: 'body', name : 'Description'}
          ]}
        />
      </div>
      {posts.length 
        ? 
        <PostList remove={removePost} posts={posts} title={"POST LIST 1"}/>
        : 
        <h1 style={{textAlign: 'center'}}>
          Post not found
        </h1>
      }
   </div>
  );
}

export default App;
