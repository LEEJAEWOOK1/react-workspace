function Quiz03StoreCom({inBtn, outBtn, msg, inData, outData}){
    console.log(msg === "")
    let msg2;
    if(msg === ""){
        msg2 = <b>오픈 전 입니다</b>;
    }else{
        msg2 = <b>
                indata : {inData}<br></br>
                outdata : {outData}<br></br>
                in - out = {inData - outData}<br></br>
            </b>
    }
        
    return(<>
        {msg2}<hr></hr>
        {(msg === "")? <b>오픈 전 입니다</b> 
        : <b>
            {msg}<br></br>
            indata : {inData}<br></br>
            outdata : {outData}<br></br>
            in - out = {inData - outData}<br></br>
            </b>}<br></br>
        
        <button onClick={inBtn}>IN</button>
        <button onClick={outBtn}>OUT</button>
    </>)
}
export default Quiz03StoreCom