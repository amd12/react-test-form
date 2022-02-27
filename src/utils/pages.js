 export  const getPageCount = (totalCount, limitPages) =>{
    return Math.ceil(totalCount / limitPages);
}

export const getPageArray = (totalPage) => {
    let pageArray = [];
    for (let i = 0; i<totalPage; i++ ){
        pageArray.push(i+1);
    }

    return pageArray;

}