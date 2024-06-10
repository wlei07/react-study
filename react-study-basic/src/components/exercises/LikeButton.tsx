import {IoMdHeart, IoMdHeartEmpty} from "react-icons/io";
import {useState} from "react";

interface LikeButtonProps {
    onClick: () => void
}

export default function LikeButton({onClick}: LikeButtonProps) {
    let [like, setLike] = useState(false);
    return (
    <span onClick={() => {onClick(); setLike(!like)}}>
        {like? <IoMdHeart color='#ff6b81' size={20}/> : <IoMdHeartEmpty size={20}/>}
    </span>
    );
}
