import "./App.css";
import { useEffect, useState } from "react";
import { getArticlesApi } from "./api/arcticles-api";
import ArticleList from "./components/ArticleList/ArticleList";
import SearchArticlesForm from "./components/SearchArticlesForm/SearchArticlesForm";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const getArticles = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await getArticlesApi("js");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  return (
    <>
      <SearchArticlesForm submit={setQuery} />
      {loading && <p>loading....</p>}
      {articles.length > 0 && <ArticleList articles={articles} />}
      {error && <p>error... reload the page! Hurry up u an idiot </p>}
    </>
  );
}

export default App;
