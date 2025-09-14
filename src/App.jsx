import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./mock.json";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState(data);

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