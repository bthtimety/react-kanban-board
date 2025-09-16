import {useState, useEffect, useCallback, useRef} from "react";
import style from "./Profile.module.css";
import userAvatar from "../../assets/user-avatar.svg";
import dropdownArrow from "../../assets/dropdown-arrow.svg";

const Profile = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleClickOutside]);

    return (
        <nav className={style.profile} ref={dropdownRef} onClick={handleClick}>
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
                        <a className={style.profile__link} href="#">Profile</a>
                    </span>
                    <span className={style.profile__dropdown_item}>
                        <a className={style.profile__link} href="#">Log Out</a>
                    </span>
                </div>
            )}
        </nav>
    );
};

export default Profile;