import { Link } from "react-router-dom";

function MListCom({list}){
    return (<>
        {list &&  (  
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>id</th><th>name</th>
                        </tr>
                    </thead>
                    {list.map(data =>
                    <tbody key={data.id}>
                    <tr>
                        <td>{data.id}</td><td><Link to={"/member/one?id="+data.id}>{data.name}</Link></td>
                    </tr>
                    </tbody>
                    )}
                </table>
                
                {/* <button onClick={()=>{onDelete(data.id)}}>삭제</button> */}
            </div>
        )}
    </>)
}
export default MListCom;