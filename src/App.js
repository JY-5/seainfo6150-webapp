import React, {useEffect, useState} from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import { isEmpty } from "lodash";
import ArticleList from './ArticleList/ArticleList';

function App() {
  let { url } = useRouteMatch();

  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  //
  return isEmpty(fetchedData) ? (<div>You have no data!</div>) : (
    <div className="App">
      <Switch>
        <Route path={`${url}articlelist`} exact>
          <ArticleList articles={Object.values(fetchedData)} />
        </Route>
        <Route>
          <DynamicArticle article={Object.values(fetchedData)[1]} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
