function MModifyCom ({onChange, onSubmit}){
    return(<>
        <form onSubmit={onSubmit}>
            <input type="text" name="id" onChange={onChange}/><br></br>
            <input type="text" name="pwd" onChange={onChange}/><br></br>
            <input type="text" name="name" onChange={onChange}/><br></br>
            <input type="text" name="addr" onChange={onChange}/><br></br>
        </form>
    </>)
}
export default MModifyCom;