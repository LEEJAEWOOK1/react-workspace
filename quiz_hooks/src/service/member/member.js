let data_set = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길동", addr:"마포구"},
]
const getData = () => {
    return data_set;
};
export const getOne = (id) => { //():매개변수가 들어감 (id): 함수에 전달받는 값
    return data_set.filter(mem => mem.id === id)[0]
}
const memberDelete = (id) => {
    //console.log("delete : ", id)
    //console.log("delete 전 data : ", data_set)
    data_set = data_set.filter(mem => mem.id !== id)    //데이터 삭제(내가 선택한 거 제외한 나머지를 출력해 삭제된 것처럼 보이게 함)
    //console.log("delete 후 data : ", data_set)
}
export {getData, memberDelete}