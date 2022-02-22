import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({filter, setFilter}) {

    return (
        <div>
            <MyInput pleceholder="search"
                     value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.value})}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort })}
                defaultValue="Sort:"
                options={[
                    {value: 'title', name: 'For name'},
                    {value: 'body', name: 'For description'},
                ]}
            />
        </div>
    );
}

export default PostFilter;