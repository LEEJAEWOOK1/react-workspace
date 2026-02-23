import { useDispatch, useSelector } from "react-redux";
import InfoCom from "../../components/post/InfoCom";
import { data, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { postDeleteThunk, postOneThunk } from "../../service/post/postThunk";
import { clearResult } from "../../redux/post/postDataSlice";

function PostInfoCon(){
    const {dataOne, loading, error, result} = useSelector(state => state.postData)
    const {username} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    //info/:postId => paramer={postId : 번호}
    const {postId} = useParams();
    useEffect(() => {
        dispatch(postOneThunk({id : postId}))
    },[dispatch, postId])
    const onDelete = () => {
        dispatch(postDeleteThunk({id : postId}))
    }
    const navigate = useNavigate();
    useEffect(()=>{
        if(result)
            navigate("/post/list")
        dispatch(clearResult());

    },[result, navigate, dispatch])
    const onModifyForm = () => {
        navigate("/post/modify/"+postId)
    }
    //console.log("data one : ", dataOne)
    //console.log("data loading : ", loading)
    //console.log("data error : ", error)
    return <><InfoCom username={username} onModifyForm={onModifyForm} onDelete={onDelete} dataOne={dataOne} loading={loading} error={error}/></>
}
export default PostInfoCon;