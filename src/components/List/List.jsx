import {useState} from "react";
import {Link} from "react-router-dom";
import style from "./List.module.css";
import addBtnImg from "../../assets/add-btn-img.svg";
import Form from "../Form/Form";
import {LIST_TYPES, LIST_TYPES_ORDER} from "../../config";

const List = props => {
    const {type, issues, addNewTask, moveTask, allTasks} = props;

    const [isFormVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        setFormVisible(!isFormVisible);
    };

    const currentType = LIST_TYPES_ORDER.indexOf(type);
    const previousType = LIST_TYPES_ORDER[currentType - 1];

    const getTasks = () => {
        return allTasks.find(list => list.type === previousType)?.issues || [];
    };

    const availableTasks = getTasks();

    const isAddButtonDisabled = () => {
        if (type === LIST_TYPES.BACKLOG) return false;
        return availableTasks.length === 0;
    };

    return (
        <div className={style.list}>
            <h2 className={style.list__title}>{type}</h2>
            <div className={style.list__body}>
                {issues.map(issue => (
                    <Link to={`tasks/${issue.id}`} key={issue.id} className={style.list__task_link}>
                        <div className={style.list__item}>
                            <p>{issue.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <button
                className={style.list__button}
                style={{display: isFormVisible ? "none" : "flex"}}
                onClick={handleClick}
                disabled={isAddButtonDisabled()}
            >
                <img className={style.list__button_img} src={addBtnImg} alt="Plus"/>
                <span className={style.list__button_label}>Add card</span>
            </button>
            {isFormVisible && (
                <Form
                    addNewTask={addNewTask}
                    moveTask={moveTask}
                    allTasks={allTasks}
                    setFormVisible={setFormVisible}
                    type={type}
                    previousType={previousType}
                    availableTasks={availableTasks}
                />
            )}
        </div>
    );
};

export default List;