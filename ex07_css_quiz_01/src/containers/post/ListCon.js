import { useDispatch, useSelector } from "react-redux";
import ListCom from "../../components/post/ListCom";
import { useEffect } from "react";
import { postLikedThunk, postThunk } from "../../service/post/postThunk";
import { useNavigate } from "react-router-dom";

function PostListCon(){
    const dispatch = useDispatch();
    const {data} = useSelector(state => {
        //console.log("con state => ", {...state})
        return state.postData;
    })
    // 포스트 조회 함수
    useEffect(() => {
        dispatch(postThunk());
    }, [dispatch])

    const {isLoggedIn} = useSelector(state => state.auth)
    const navigate = useNavigate()
    //특정 목록 조회
    const onInfo = (postId) => {
        if(isLoggedIn)
            navigate("/post/info/"+postId);
        else
            navigate("/login");
    }
    //좋아요
    const onLiked = (like) => {
        dispatch(postLikedThunk(like))
    }
    return <>
    <ListCom onLiked={onLiked} onInfo={onInfo} data={data}/>
    </>
}
export default PostListCon;