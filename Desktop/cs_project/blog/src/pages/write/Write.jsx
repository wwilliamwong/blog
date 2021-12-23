import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img
                className="writeImg" 
                src="https://images.pexels.com/photos/9456595/pexels-photo-9456595.jpeg?cs=srgb&dl=pexels-rodrigo-pederzini-9456595.jpg&fm=jpg"
                alt="" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story.." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
