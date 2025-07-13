import {Routes, Route} from "react-router-dom"
import style from "./Main.module.css"
import Board from "../Board/Board"
import TaskPage from "../TaskPage/TaskPage"

const Main = props => {
    return (
        <main className={style.main}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Board {...props}/>
                    }
                />
                <Route
                    path="/tasks/:taskId"
                    element={
                        <TaskPage {...props}/>
                    }
                />
            </Routes>
        </main>
    )
}

export default Main