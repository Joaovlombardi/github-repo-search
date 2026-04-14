import { useState, useEffect } from "react";

function useGithubSearch() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("stars");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=desc&per_page=10&page=${page}`,
        );

        if (!response.ok) throw new Error("Erro ao buscar repositórios");

        const data = await response.json();
        setRepos(data.items);
        setTotalCount(data.total_count);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (query) fetchRepos();
  }, [query, sort, page]);

  function handleSearch() {
    setPage(1);
    setQuery(inputValue);
  }

  return {
    inputValue,
    setInputValue,
    repos,
    loading,
    error,
    sort,
    setSort,
    page,
    setPage,
    totalCount,
    handleSearch,
  };
}

export default useGithubSearch;