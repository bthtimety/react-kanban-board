import {Link} from "react-router-dom";
import style from "./Header.module.css";
import Profile from "../Profile/Profile";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Link to={"/"} className={style.header__link}>
                    <h1 className={style.header__title}>Awesome Kanban Board</h1>
                </Link>
                <Profile/>
            </div>
        </header>
    );
};

export default Header;