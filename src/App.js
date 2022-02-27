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
import {useFetching} from "./hooks/useFetching";
import {getPageArray, getPageCount} from "./utils/pages";

function App() {

    const [posts, setPosts] = useState([] );
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.sort);

    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);





    const [fetchPosts, isLoading, error] = useFetching ( async ()=> {

        const response = await PostService.getAll(limit, page);

        setPosts(response.data);

        const totalCount = response.headers['x-total-count'];
        setTotalPage(getPageCount(totalCount, limit))
    })

    let pageArray = getPageArray(totalPage)




    console.log(totalPage);
    console.log(pageArray);


    useEffect(()=>{
        fetchPosts()
    },[])

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
            {
                error && <h1>Error...</h1>
            }
            {
                isLoading && <div className='content'><Loader/></div>
            }
            <PostList remove={deletePost} posts={sortedAndSearchedPosts}/>

            {
                pageArray.map(page=>
                    <MyButton onClick={()=> setPage+1}>{page}</MyButton>
                )
            }
        </div>
    );
}

export default App;
