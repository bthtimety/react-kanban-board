import {useState} from "react";
import style from "./Form.module.css";
import {LIST_TYPES, LIST_TYPES_ORDER} from "../../config";

const Form = props => {
    const {addNewTask, setFormVisible, type, moveTask, allTasks} = props;
    const [values, setValues] = useState({
        title: "",
        selectedTask: ""
    });

    const currentType = LIST_TYPES_ORDER.indexOf(type);
    const previousType = LIST_TYPES_ORDER[currentType - 1];

    const getTasks = () => {
        return allTasks.find(list => list.type === previousType)?.issues || [];
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
                    />
                    :
                    <select
                        className={style.form__select}
                        name="selectedTask"
                        value={values.selectedTask}
                        onChange={handleChange}
                    >
                        <option value=""></option>
                        {getTasks().map(task => (
                            <option key={task.id} value={task.id}>
                                {task.title}
                            </option>
                        ))}
                    </select>
            }
            <button className={style.form__button} type="submit">Submit</button>
        </form>
    );
};

export default Form;