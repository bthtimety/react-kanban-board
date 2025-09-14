import style from "./Board.module.css";
import List from "../List/List";
import {generateId} from "../../utils";
import {LIST_TYPES, LIST_TYPES_ORDER} from "../../config";

const Board = props => {
    const {tasks, setTasks} = props;

    const orderedLists = LIST_TYPES_ORDER.map(type =>
        tasks.find(list => list.type === type)
    );

    const addNewTask = (title) => {
        const newTask = {
            id: generateId(),
            title: title
        };
        const updatedTasks = tasks.map(list => {
            if (list.type === LIST_TYPES.BACKLOG) {
                return {
                    ...list,
                    issues: [...(list.issues), newTask]
                }
            }
            return list;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className={style.board}>
            {orderedLists.map((list) => {
                return (
                    <List
                        key={list.type}
                        type={list.type}
                        issues={list.issues}
                        addNewTask={addNewTask}
                    />
                );
            })}
        </div>
    );
};

export default Board;