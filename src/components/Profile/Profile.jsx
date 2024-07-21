import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className={css.profile}>
            <div>
                <img src={image} alt={name} className={css.imageProfile}/>
                <p className ={css.title}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>
        <ul className={css.list}>
          <li className={css.statsItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                  <span>Views</span>
                  <span>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                  <span>Likes</span>
                  <span>{stats.likes}</span>
                </li>
              </ul>
        </div>
    );
};

export default Profile;