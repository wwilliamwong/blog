import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/9092470/pexels-photo-9092470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt=""
                className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>William</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt distinctio et nisi sunt delectus dignissimos, doloremque obcaecati, cumque mollitia tempore, sint facilis neque non sit commodi doloribus libero quos?</p>
            </div>
        </div>
    )
}
