import MiddleModalBox from '../../atom/ModalBox/MiddleModalBox'
import styles from './OpenDicModalTable.module.css'
import Link from 'next/link';
import { useState } from 'react';
import DeleteButton from '../../atom/Button/DeleteButton';
export default function OpenDicModalTable({ children, data, handleCloseClick }) {
    const [category, setCategory] = useState("");

    const onClick = ((e) => {
        location.href = `/word?word=${e.target.innerText}`;

    })


    return (
        <div className={styles.containner}>
            <table className={styles.table}>
                <thead></thead>
                <tbody>
                    <tr className={styles.tr}>
                        <th className={styles.width}><MiddleModalBox onClick={onClick}>침</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox onClick={onClick}>한의학</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox onClick={onClick}>계피나무</MiddleModalBox><button>x</button></th>
                        <th></th>
                    </tr>
                    {/* <tr className={styles.tr}>
                        <th className={styles.width}><MiddleModalBox>단어4</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어5</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어6</MiddleModalBox><button>x</button></th>
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.width}><MiddleModalBox>단어7</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어8</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어9</MiddleModalBox><button>x</button></th>
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.width}><MiddleModalBox>단어7</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어8</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어9</MiddleModalBox><button>x</button></th>
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.width}><MiddleModalBox>단어7</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어8</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어9</MiddleModalBox><button>x</button></th>
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.width}><MiddleModalBox>단어7</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어8</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어9</MiddleModalBox><button>x</button></th>
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.width}><MiddleModalBox>단어7</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어8</MiddleModalBox><button>x</button></th>
                        <th className={styles.width}><MiddleModalBox>단어9</MiddleModalBox><button>x</button></th>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
