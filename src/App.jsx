import React, { useMemo, useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
// import MySelect from "./components/UI/select/MySelect";
// import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "AA", body: "WW"},
    {id: 2, title: "QQ", body: "DD"},
    {id: 3, title: "CC", body: "NN"}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts =  useMemo(()=>{

    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  },[filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

// 1:33:43 


  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={()=> setModal(true)}>
        Set new post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create ={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0 '}} />
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"POST LIST 1"}/>
   </div>
  );
}

export default App;
