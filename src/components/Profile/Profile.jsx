import "./Profile.css"
const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className="profile">
            <div>
                <img src={image} alt={name} className="imageProfile"/>
                <p className ="title">{name}</p>
                <p className="text">@{tag}</p>
                <p className="text">{location}</p>
            </div>
        <ul className="list">
          <li className="statsItem">
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className="statsItem">
                  <span>Views</span>
                  <span>{stats.views}</span>
                </li>
                <li className="statsItem">
                  <span>Likes</span>
                  <span>{stats.likes}</span>
                </li>
              </ul>
        </div>
    );
};

export default Profile;