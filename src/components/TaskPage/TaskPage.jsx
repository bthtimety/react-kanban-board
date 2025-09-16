import {useParams, Link} from "react-router-dom";
import style from "./TaskPage.module.css";
import closeBtnImg from "../../assets/close-btn-img.svg";
import {useState, useEffect} from "react";

const TaskPage = props => {
    const {tasks, setTasks} = props;
    const {taskId} = useParams();
    const [description, setDescription] = useState("");

    const task = tasks
        .flatMap(list => list.issues)
        .find(task => task.id === taskId);

    useEffect(() => {
        if (task) {
            setDescription(task.description || "This task has no description.");
        }
    }, [task]);

    const handleChange = (e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);

        const finalDescription = newDescription.trim() === "" ? "This task has no description." : newDescription;

        const updatedTasks = tasks.map(list => ({
            ...list,
            issues: list.issues.map(issue =>
                issue.id === taskId
                    ? {...issue, description: finalDescription}
                    : issue
            )
        }));

        setTasks(updatedTasks);
    };

    return (
        <div className={style.task_page}>
            <div className={style.task_page__header}>
                <h2 className={style.task_page__title}>{task.title}</h2>
                <Link to="/react-kanban-board/" className={style.task_page__button}>
                    <img src={closeBtnImg} alt="Close"/>
                </Link>
            </div>
            <div className={style.task_page__body}>
                <textarea
                    className={style.task_page__textarea}
                    value={description}
                    onChange={handleChange}
                    placeholder="Add a task description..."
                ></textarea>
            </div>
        </div>
    );
};

export default TaskPage;