function RepoCard({ repo }) {
  function formatDate(iso) {
    return new Date(iso).toLocaleDateString("pt-BR");
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex-1 min-w-0">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium text-base hover:underline"
        >
          {repo.full_name}
        </a>
        <p className="text-gray-500 text-sm mt-1 mb-3">{repo.description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-amber-400">★</span>
          <span className="font-medium text-gray-700">
            {repo.stargazers_count.toLocaleString("pt-BR")} stars
          </span>
          <span className="text-gray-300">|</span>
          <span>Updated on {formatDate(repo.updated_at)}</span>
        </div>
      </div>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors self-start md:self-end whitespace-nowrap"
      >
        View on Github
      </a>
    </div>
  );
}

export default RepoCard;
