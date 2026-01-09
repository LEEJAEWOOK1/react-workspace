let data_set = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길동", addr:"마포구"},
]
//export getList = () => data_set
//const path = "http://localhost:4000/mem";
export function getList(){
    //const getData = fetch(path);
    //console.log(getData)

    return data_set;
    //return getData;
}
//const path = "http://localhost:4000/mem";
//export const getOne = (id) => data_set.filter(data => data.id === id)[0]
export function getOne(id) {
    //console.log("svc one id : ", id)
    return data_set.filter(data => data.id === id)[0]
    //return fetch(path+"/"+id)   //http://localhost:4000/mem/ccc-s
}
export const memberDelete = (delId) => {
    data_set = data_set.filter(data => data.id !== delId)
}
export const register = (user) => {
    //delete user.pwdChk; //특정 키 삭제
    data_set = data_set.concat(user)
    /*fetch(path, {
        method : "post",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(user) // 문자형식으로 바꿔줌
    })*/
}
export const modify = (user) => {
    data_set = data_set.filter(data => data.id !== user.id)
    data_set = data_set.concat(user)
}