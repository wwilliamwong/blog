import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/1142941/pexels-photo-1142941.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    <span className="postCat">Style</span>
                </div>
                <span className="postTitle">Life is amazing</span>
                <hr />
                <span className="postDate">5 days</span>
            </div>
            <p className="postDesc">
            Life brings us as many joyful moments as it does downfalls, and although there are days we wish there was a manual to follow, it simply wouldn’t be the same without the spontaneity.
            </p>
        </div>
    )
}
