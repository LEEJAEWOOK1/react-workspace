import { createContext, useState } from "react";

export const TestContext = createContext(); // 전역에서 사용할 수 있게 설정

const initState = {number : 0}
export const TestProvider = ({children}) => {
    const [data, setData] = useState(initState);

    const clickPlus = () => {
        //alert("clickPlus")
        setData({number : data.number + 1})
    }
    const clickSub = () => {
        //alert("clickSub")
        setData({number : data.number - 1})
    }
    const value = {clickPlus, clickSub, data} // value 값 내보내겠다
    return(<>
        <TestContext.Provider value={value}>  
            {children}
        </TestContext.Provider>
    </>)
}
/*
const TestContext = () => {
    return (<>
        <Test01 name="값 설정">APP</Test01>
    </>)            //name     childern
}
function Test01({childern, name}) {
    console.log("props : ", childern)
    console.log("props : ", name)
    return (<>Test01</>)
}
export default TestContext;
*/