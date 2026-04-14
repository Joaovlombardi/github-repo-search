import useGithubSearch from "../hooks/useGithubSearch";
import SearchBar from "../components/SearchBar";
import RepoCard from "../components/RepoCard";

function Home() {
  const { inputValue, setInputValue, handleSearch, repos } = useGithubSearch();

  return (
    <div>
      <SearchBar
        value={inputValue}
        onChange={setInputValue}
        onSearch={handleSearch}
      />
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default Home;
