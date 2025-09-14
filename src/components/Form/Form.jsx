import {useState} from "react";
import style from "./Form.module.css";
import {LIST_TYPES} from "../../config";

const Form = props => {
    const {addNewTask, setFormVisible, type} = props;
    const [values, setValues] = useState({
        title: ""
    });

    const handleChangeInput = (e) => {
        const fieldName = e.target.name;
        setValues({...values, [fieldName]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.title) {
            addNewTask(values.title);
            setFormVisible(false);
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
                        onChange={handleChangeInput}
                    />
                    :
                    <select>
                        <option></option>
                    </select>
            }
            <button className={style.form__button} type="submit">Submit</button>
        </form>
    );
};

export default Form;