import {useState} from "react";
import style from "./Profile.module.css";
import userAvatar from "../../assets/user-avatar.svg";
import dropdownArrow from "../../assets/dropdown-arrow.svg";

const Profile = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleClick = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <nav className={style.profile} onClick={handleClick}>
            <img src={userAvatar} alt="User's avatar"/>
            <img
                className={style.profile__arrow}
                style={{transform: isDropdownVisible ? "rotate(180deg)" : "rotate(0deg)"}}
                src={dropdownArrow}
                alt="Arrow"
            />
            {isDropdownVisible && (
                <div className={style.profile__dropdown}>
                    <span className={style.profile__dropdown_item}>
                        <a href="#">Profile</a>
                    </span>
                    <span className={style.profile__dropdown_item}>
                        <a href="#">Log Out</a>
                    </span>
                </div>
            )}
        </nav>
    );
};

export default Profile;