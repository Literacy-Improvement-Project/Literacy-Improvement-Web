import styles from './Meanbox.module.css';
import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function Meanbox({word}) {

    return (
        <div className={styles.box}>
            <Link href={{
                pathname: '/word',

                query: { word: word }
            }}
                passHref
            >
                {word}
            </Link>
            {/* <Link href={{
                pathname: '/word',
                query: { word: props.word.lemma }
            }}>
                {props.word.type}
            </Link> */}
        </div>
    )
}