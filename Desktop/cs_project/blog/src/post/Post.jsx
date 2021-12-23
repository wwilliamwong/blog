import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium enim impedit inventore, iusto, hic corrupti odit suscipit numquam temporibus fugit distinctio pariatur accusantium, labore ex? Atque labore ducimus vero?
            </p>
        </div>
    )
}
