function MRegCom({inputCheck, reg, onChange, onSubmit}){
    return (<>
        <form onSubmit={onSubmit}>
            <input ref={e=>inputCheck.current[0]=e} type="text" value={reg.id} name="id" onChange={onChange} placeholder="input id"/><br></br>    
            <input ref={e=>inputCheck.current[1]=e} type="password" value={reg.pwd} name="pwd" onChange={onChange} placeholder="input pwd"/><br></br>
            <input ref={e=>inputCheck.current[2]=e} type="password" value={reg.pwdChk} name="pwdChk" onChange={onChange} placeholder="check pwd"/><br></br>    
            <input ref={e=>inputCheck.current[3]=e} type="text" value={reg.name} name="name" onChange={onChange} placeholder="input name"/><br></br>
            <input ref={e=>inputCheck.current[4]=e} type="text" value={reg.addr} name="addr" onChange={onChange} placeholder="input addr"/><br></br>
            <button>회원가입</button>    
        </form>
    </>)
}
export default MRegCom;