import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__task_counter}>
                    <span>Active tasks: N</span>
                    <span>Finished tasks: M</span>
                </div>
                <p className={style.footer__author}>Kanban board by Anastasia Zaytseva, 2025</p>
            </div>
        </footer>
    );
};

export default Footer;