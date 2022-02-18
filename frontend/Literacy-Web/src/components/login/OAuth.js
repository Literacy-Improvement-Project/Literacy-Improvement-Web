import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./OAuth.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function OAuth({}) {
  useEffect(() => {
    // 렌더링
  }, []);

  const classes = useStyles();

  const CLIENT_ID = "ade593cab628c91e766dd3f9497bbc92";
  const REDIRECT_URI = "http://localhost:3000/kakaoAuth";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <Button id="kakaoLoginButton" href={KAKAO_AUTH_URL}></Button>
    </div>
  );
}
