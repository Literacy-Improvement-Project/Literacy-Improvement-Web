import styles from "./NoLogin.module.css"
export default function NoLogin() {

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.h2}>홈에서 로그인을 해주세요.</h2>
                <img className={styles.img} src='./images/request_login.gif' />
            </div>
        </div>
    );
}