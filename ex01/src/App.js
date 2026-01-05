import Site from "./Site";
function App(){
    const a_tag = [
        {txt:"네이버", href : "https://www.naver.com"},
        {txt: "다음", href : "https://www.daum.net"},
        {txt:"구글", href : "https://www.google.co.kr"}
    ]
    const arr = [10, 20, 30]

    for (let i = 0; i < arr.length ; i++){
        console.log("i : "+i + ", arr[i] : "+arr[i])
    }
    const testMap = (value, index) => {
        console.log("index : "+index +", value : "+value)
        return value * 10;
    }
    //arr[10,20,30]
    const arr2 = arr.map(testMap);
    //arr2 = [100,200,300]
    console.log("arr : "+arr)
    console.log("arr2 : "+arr2)

    return (<>
        <h1>app표현</h1>
        <Site a_tag={a_tag} arr={arr}/>
    </>)
}
export default App;