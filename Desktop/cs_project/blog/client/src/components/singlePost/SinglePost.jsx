import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt=""
                className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    I love hiking!
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>William</b></span>
                    <span className="singlePostDate">5 hour ago</span>
                </div>
                <p className="singlePostDesc">
                There’s something about hiking where if you pass someone, it’s like greeting an old friend: ‘Hello!’ ‘Good morning!’ ‘Keep going!’ ‘You’re nearly there!’

I like to hike because people are just so nice when they’re walking up and down mountains. It’s the unspoken hiking rule that if you see someone, you’re gonna have to say hi.
For solo female travellers, hiking is definitely a good way to meet people. I recommend joining your local hiking groups to discover the most adventurous, beautiful hiking trails in your area and gain some hiking buddies.

Be prepared to venture far if you’re in the city. When I was hiking in China, I would take overnight trains on a Friday night to reach my hiking destination the next day.

I feel it’s worth travelling this far for a hike if you’re in the city. You can start to feel suffocated when you’re this far away from Mother Nature. If it hadn’t been for hiking at the weekends, I wouldn’t have managed to survive in Shanghai as long as I did.

                </p>
            </div>
        </div>
    )
}
