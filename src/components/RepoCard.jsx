function RepoCard({ repo }) {
  function formatDate(iso) {
    return new Date(iso).toLocaleDateString("pt-BR");
  }

  return (
    <div>
      <h2>{repo.full_name}</h2>
      <p>{repo.description}</p>
      <span>{repo.stargazers_count.toLocaleString("pt-BR")} stars</span>
      <span>{formatDate(repo.updated_at)}</span>
      <a href={repo.html_url} target="_blank">
        Ver no GitHub
      </a>
    </div>
  );
}

export default RepoCard;
