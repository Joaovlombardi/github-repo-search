import useGithubSearch from "../hooks/useGithubSearch";
import SearchBar from "../components/SearchBar";
import RepoCard from "../components/RepoCard";
import SortButtons from "../components/SortButtons";
import Pagination from "../components/Pagination";

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
    totalCount
  } = useGithubSearch();

  const totalPages = Math.min(Math.ceil(totalCount / 10), 100);
  // math.min limita a 100 páginas, math.ceil arredonda pra cima

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSearch={handleSearch}
        />
        <SortButtons sort={sort} onSortChange={setSort} />
        <div className="flex flex-col gap-3">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
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
