import React, { useEffect } from "react";
import { } from "../redux";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(5),

        // padding: theme.spacing(10),
        // width: '100%',
        // maxWidth: '30ch',
        // heigth: '100',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #D9D9D9',
        borderRadius: '20px',
    },
    test: {
        // height: '50%',
        float: 'right',
        // border: '1px solid #D9D9D9',
        // position: 'abolute',
        // left: '50%',
        // top: '50%',
        // transform: 'translate(-50%, -50%)',

        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    box: {
        border: '1px solid #D9D9D9',
    },
    bottom: {
        borderBottom: '1px solid #D9D9D9',
    },
}));

export default function ThemeWord() {
    useEffect(() => {
        // 렌더링
    }, []);

    const classes = useStyles();
    // 사용자에게 보여지는 부분
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <h3>테마 단어</h3>
                </Grid>
                <Grid item xs={2} >
                </Grid>
                <Grid item xs={5} >
                    <h3 />
                    <button className={classes.test}>
                        더 알아보기
                    </button>
                </Grid>
                <Grid item xs={12} className={classes.bottom}>
                    <h3 />
                    <button className={classes.test}>
                        더 알아보기
                    </button>
                </Grid>
                <Grid item xs={12} className={classes.bottom}>
                    <h3 />
                    <button className={classes.test}>
                        더 알아보기
                    </button>
                </Grid>
                <Grid item xs={12} className={classes.bottom}>
                    <h3 />
                    <button className={classes.test}>
                        더 알아보기
                    </button>
                </Grid>
                <Grid item xs={12} className={classes.bottom}>
                    <h3 />
                    <button className={classes.test}>
                        더 알아보기
                    </button>
                </Grid>
                <Grid item xs={12} className={classes.bottom} >
                    <h3 />
                    <button className={classes.test}>
                        더 알아보기
                    </button>
                </Grid>
            </Grid>
        </div>
    );
}
