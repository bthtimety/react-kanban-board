import {useState} from "react";
import {Link} from "react-router-dom";
import style from "./List.module.css";
import addBtnImg from "../../assets/add-btn-img.svg";
import Form from "../Form/Form";

const List = props => {
    const {type, issues, addNewTask} = props;

    const [isFormVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <div className={style.list}>
            <h2 className={style.list__title}>{type}</h2>
            <div className={style.list__body}>
                {issues.map(issue => (
                    <Link to={`/tasks/${issue.id}`} className={style.list__task_link}>
                        <div className={style.list__item} key={issue.id}>
                            <p>{issue.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <button
                className={style.list__button}
                style={{display: isFormVisible ? "none" : "flex"}}
                onClick={handleClick}
            >
                <img src={addBtnImg} alt="Plus"/>
                <span>Add card</span>
            </button>
            {isFormVisible && (
                <Form
                    addNewTask={addNewTask}
                    setFormVisible={setFormVisible}
                    type={type}
                />
            )}
        </div>
    );
};

export default List;