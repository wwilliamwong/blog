import "./post.css"

export default function Post1() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Sport</span>
                </div>
                <span className="postTitle">I love hiking!</span>
                <hr />
                <span className="postDate">5 hour ago</span>
            </div>
            <p className="postDesc">
            There’s something about hiking where if you pass someone, it’s like greeting an old friend: ‘Hello!’ ‘Good morning!’ ‘Keep going!’ ‘You’re nearly there!’

I like to hike because people are just so nice when they’re walking up and down mountains. It’s the unspoken hiking rule that if you see someone, you’re gonna have to say hi.
            </p>
        </div>
    )
}
