const ListCom = ({loading, error, list}) => {
    if(loading)
        return <h3>로딩중...</h3>
    if(error)
        return <h3>{error}</h3>
    return (<>
        {list && list.map(d=>(
            <div key={d.id}>
                <span>{d.id}</span>
                <span>{d.name}</span>
                <span>{d.addr}</span>
        </div>))}
    </>)
}
export default ListCom;