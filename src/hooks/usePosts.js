import {useMemo} from "react";

export const useSortedPosts = (posts, sort) =>{

    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts])

    return sortedPost;

}

export  const usePosts = (post, sort, query) =>{

    const sortPost =  useSortedPosts(post, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortPost.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortPost])

    return sortedAndSearchedPosts;

}