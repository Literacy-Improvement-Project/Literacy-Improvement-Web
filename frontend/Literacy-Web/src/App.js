import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUp from "./components/signup/SignUp";
import Login from "./page/Login";
import Main from "./page/Main";
import TopBar from "./components/TopBar";
import Word from "./page/Word";
import MyPage from "./page/MyPage";
import WordRanking from "./components/WordRanking";
import OAuthRedirectHandler from "./components/login/OAuthRedirectHandler";
import Quiz2 from "./components/quiz/Quiz2";
import Summary2 from "./components/quiz/Summary2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={TopBar} />
        <Switch>
          <Route path="/Home" component={Main} />
          <Route path="/Quiz2" component={Quiz2} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/MyPage" component={MyPage} />
          <Route path="/Word/:keyword" component={Word} />
          <Route path="/Ranking" component={WordRanking} />
          <Route path="/kakaoAuth" component={OAuthRedirectHandler} />
          <Route path="/Summary2" component={Summary2} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
