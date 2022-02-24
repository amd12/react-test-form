import React, {useMemo, useState} from "react";
import './style/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";




function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'aa', body: 'description javascript'},
        {id: 2, title: 'bb', body: 'description java'},
        {id: 3, title: 'vv', body: 'description java'}
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);



    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (indexPost) => {
        setPosts(posts.filter(p => p.id !== indexPost.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={()=>setModal(true)}>
                Popup
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>
            <hr style={{margin: '20px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={deletePost} posts={sortedAndSearchedPosts}/>
        </div>
    );
}

export default App;
