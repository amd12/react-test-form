import React, {useMemo, useState} from "react";
import './style/app.css'
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'aa', body: 'description javascript'},
        {id: 2, title: 'bb', body: 'description java'},
        {id: 3, title: 'vv', body: 'description java'}
    ]);

    const [selectedSort, setSelectedSort] = useState("");
    const [searchQwery, setSearchQwery] = useState("");

    const sortedPost = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        } else {
            return posts;
        }
    }, [selectedSort, posts])


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(searchQwery))

    }, [searchQwery, sortedPost])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    const deletePost = (indexPost) => {
        console.log("deletePost");
        setPosts(posts.filter(p => p.id !== indexPost.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '20px'}}/>
            <div>
                <MyInput pleceholder="search"
                         value={searchQwery}
                         onChange={e => setSearchQwery(e.target.value)}
                />

                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sort:"
                    option={[
                        {value: 'title', name: 'For name'},
                        {value: 'body', name: 'For description'},
                    ]}
                />
            </div>
            {
                sortedAndSearchedPosts.length !== 0
                    ? <PostList remove={deletePost} posts={sortedAndSearchedPosts}/>
                    : <h3 style={{textAlign: "center"}}>Not posts</h3>
            }

        </div>
    );
}

export default App;
