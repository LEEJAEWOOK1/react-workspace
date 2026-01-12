const RegCom = ({loading, error, onSubmit, onChange, username, pwd, name, addr}) =>{
    return(<>
    {loading?<h3>회원 가입 진행 중...</h3>
    :error?<h3>{error}</h3>
    :(
        <form onSubmit={onSubmit}>
            <input type="text" name="id" value={username} onChange={onChange} /><br></br>
            <input type="text" name="pwd" value={pwd} onChange={onChange} /><br></br>
            <input type="text" name="name" value={name} onChange={onChange} /><br></br>
            <input type="text" name="addr" value={addr} onChange={onChange} /><br></br>
            <button>회원가입</button>
        </form>
    )
    }
    
    </>)
}
export default RegCom;