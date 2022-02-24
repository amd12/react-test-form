import React from 'react';

const MySelect = ({options,onChange,defaultValue}) => {

    const changeSelect = (e)=> {
        console.log(e)
        onChange(e)

    }
    return (
        <select onChange={event => changeSelect(event.target.value)} >
            <option  disabled>{defaultValue}</option>
            {options.map((option) =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;