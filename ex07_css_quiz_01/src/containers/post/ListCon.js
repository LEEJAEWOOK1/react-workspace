import { useDispatch, useSelector } from "react-redux";
import ListCom from "../../components/post/ListCom";
import { useEffect } from "react";
import { postThunk } from "../../service/post/postThunk";
import { useNavigate } from "react-router-dom";

function PostListCon(){
    const dispatch = useDispatch();
    const {data} = useSelector(state => {
        //console.log("con state => ", {...state})
        return state.postData;
    })

    useEffect(() => {
        dispatch(postThunk());
    }, [dispatch])

    const {isLoggedIn} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const onInfo = (postId) => {
        if(isLoggedIn)
            navigate("/post/info/"+postId);
        else
            navigate("/login");
    }
    return <>
    <ListCom onInfo={onInfo} data={data}/>
    </>
}
export default PostListCon;