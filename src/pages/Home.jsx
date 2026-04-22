import useGithubSearch from "../hooks/useGithubSearch";
import SearchBar from "../components/SearchBar";
import RepoCard from "../components/RepoCard";
import SortButtons from "../components/SortButtons";
import Pagination from "../components/Pagination";
import githubLogo from "/github-logo-preta.png";

function Home() {
  const {
    inputValue,
    setInputValue,
    handleSearch,
    repos,
    sort,
    setSort,
    page,
    setPage,
    totalCount,
    loading,
    error,
  } = useGithubSearch();

  const totalPages = Math.min(Math.ceil(totalCount / 10), 100);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="text-center mb-8 py-2">
        <img
          src={githubLogo}
          alt="GitHub Logo"
          className="w-12 h-12 mx-auto mb-3"
        />
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          GitHub Repo Search
        </h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSearch={handleSearch}
        />

        <SortButtons sort={sort} onSortChange={setSort} />

        {error && <p className="text-center text-red-500 py-10">{error}</p>}

        {loading && (
          <p className="text-center text-gray-400 py-10">Loading...</p>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="text-center text-gray-400 py-10">
            Enter a term to search for repositories.
          </p>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="flex flex-col gap-3">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default Home;
