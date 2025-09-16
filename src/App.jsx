import {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./tasks.js";
import "./App.css";

const App = () => {
    const initialTasks = () => {
        const tasksStr = localStorage.getItem("tasks");
        return tasksStr ? JSON.parse(tasksStr) : data;
    };

    const [tasks, setTasks] = useState(initialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main tasks={tasks} setTasks={setTasks}/>
                <Footer tasks={tasks}/>
            </div>
        </BrowserRouter>
    );
};

export default App;