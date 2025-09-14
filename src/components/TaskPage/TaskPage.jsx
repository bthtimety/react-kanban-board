import {useParams, Link} from "react-router-dom";
import style from "./TaskPage.module.css";
import closeBtnImg from "../../assets/close-btn-img.svg";

const TaskPage = props => {
    const {tasks} = props;
    const {taskId} = useParams();

    const task = tasks
        .flatMap(list => list.issues)
        .find(task => task.id === taskId);

    return (
        <div className={style.task_page}>
            <div className={style.task_page__header}>
                <h2 className={style.task_page__title}>{task.title}</h2>
                <Link to="/" className={style.task_page__button}>
                    <img src={closeBtnImg} alt="Close"/>
                </Link>
            </div>
            <div className={style.task_page__body}>
                <textarea className={style.task_page__textarea}></textarea>
            </div>
        </div>
    );
};

export default TaskPage;