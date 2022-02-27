import React, {useEffect, useState} from "react";
import './style/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";

function App() {

    const [posts, setPosts] = useState([] );
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.sort);
    const [isLoading, setIsLoading] = useState(false);


    async function fetchPost(){
        setIsLoading(true);
        setTimeout(async ()=>{

            const posts = await PostService.getAll();
            setPosts(posts.data);
            setIsLoading(false);

        },3000)
    }

    useEffect(()=>{
        fetchPost()
    },[])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (indexPost) => {
        setPosts(posts.filter(p => p.id !== indexPost.id))
    }

    return (
        <div className="App">
            <button onClick={fetchPost}>Get request</button>
            <MyButton style={{marginTop: 30}} onClick={()=>setModal(true)}>
                Popup
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>
            <hr style={{margin: '20px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                isLoading && <div className='content'><Loader/></div>
            }
            <PostList remove={deletePost} posts={sortedAndSearchedPosts}/>
        </div>
    );
}

export default App;
