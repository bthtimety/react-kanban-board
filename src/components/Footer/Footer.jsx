import style from "./Footer.module.css";

const Footer = props => {
    const {tasks} = props;

    const backlogTasks = tasks.find(item => item.type === "Backlog")?.issues.length || 0;
    const finishedTasks = tasks.find(item => item.type === "Finished")?.issues.length || 0;

    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__task_counter}>
                    <span className={style.footer__active_tasks}>
                        Active tasks: {backlogTasks}
                    </span>
                    <span className={style.footer__finished_tasks}>
                        Finished tasks: {finishedTasks}
                    </span>
                </div>
                <p className={style.footer__author}>Kanban board by Anastasia Zaytseva, 2025</p>
            </div>
        </footer>
    );
};

export default Footer;