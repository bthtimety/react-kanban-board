import {useState} from "react";
import style from "./Form.module.css";
import {LIST_TYPES} from "../../config";

const Form = props => {
    const {addNewTask, setFormVisible, type, moveTask, previousType, availableTasks} = props;
    const [values, setValues] = useState({
        title: "",
        selectedTask: ""
    });

    const isSubmitDisabled = () => {
        if (type === LIST_TYPES.BACKLOG) {
            return !values.title.trim();
        } else {
            return !values.selectedTask;
        }
    };

    const handleChange = (e) => {
        const fieldName = e.target.name;
        setValues({...values, [fieldName]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === LIST_TYPES.BACKLOG) {
            if (values.title) {
                addNewTask(values.title);
                setFormVisible(false);
            }
        } else {
            if (values.selectedTask) {
                moveTask(values.selectedTask, previousType, type);
                setFormVisible(false);
            }
        }
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            {
                type === LIST_TYPES.BACKLOG
                    ?
                    <input
                        className={style.form__input}
                        id="taskTitle"
                        name="title"
                        type="text"
                        value={values.title}
                        onChange={handleChange}
                        placeholder="Enter a task name..."
                    />
                    :
                    <select
                        className={style.form__select}
                        name="selectedTask"
                        value={values.selectedTask}
                        onChange={handleChange}
                    >
                        <option
                            className={style.form__select_option}
                            value=""
                            disabled
                        >Choose a task...</option>
                        {availableTasks.map(task => (
                            <option key={task.id} value={task.id}>
                                {task.title}
                            </option>
                        ))}
                    </select>
            }
            <button
                className={style.form__button}
                disabled={isSubmitDisabled()}
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;