import profilePic from './assets/pfp.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Athira Saji</h2>
            <p className="card-text">I am a computer engineering student</p>
        </div>
    );
}

export default Card