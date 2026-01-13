const MLoginCom = ({loading, error, onSubmit, state, onChange}) =>{

    let content = null;
    if(loading){
        content = <h3>로그인 중</h3>
    }else if(error){
        content = <h3>{error}</h3>
    }else{
        content = <form onSubmit={onSubmit}>
            <input type="text" name="id" value={state.login.id} onChange={onChange} /><br></br>
            <input type="text" name="pwd" value={state.pwd} onChange={onChange} /><br></br>
            <button>로그인</button>
        </form>
    }
    //console.log("com state : ", state)
    return(<>
        {content}
    </>)
}
export default MLoginCom;