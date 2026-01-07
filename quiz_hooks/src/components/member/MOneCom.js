function MOneCom({user, onDelete}){
    return (<>
        <div>
            <ul>
                <li>id : {user.id}</li>
                <li>pwd : {user.pwd}</li>
                <li>name : {user.name}</li>
                <li>addr : {user.addr}</li>
            </ul>
            <button onClick={()=>{onDelete(user.id)}}>삭제</button>
        </div>
    </>)
}
export default MOneCom;