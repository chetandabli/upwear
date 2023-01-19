const get = (x)=>{
    return document.getElementById(`${x}`)
}
const create = (x)=>{
    return document.createElement(`${x}`)
}

export {
    get,
    create
}