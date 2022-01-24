const menuLoaded = (newMenu)=>{
    return{
        type:'MANU_LOADED',
        payload: newMenu
    }
}

const menuRequested = ()=>{
    return{
        type:'MANU_REQUESTED'
    }
}

export {
    menuLoaded,
    menuRequested
};