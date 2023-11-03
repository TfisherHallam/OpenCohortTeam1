import styles from './headerstyles.module.css';

const Main = () => {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <div className={styles.main_container}>
         <nav className={styles.navbar}></nav> 
           <h1>Test</h1>
           <button className={styles.white_btn} onClick={handleLogout}>
            Logout
           </button>
        </div>
    )
};

export default Main;