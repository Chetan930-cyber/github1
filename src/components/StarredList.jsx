
import React from 'react';
import { useSelector } from 'react-redux';

function StarredList() {
  const starredRepos = useSelector((state) => state.user.starredRepos);
  const { darkMode } = useSelector((state) => state.user);

  return (
    <div>
  <div class="relative inline-block mt-10 w-full h-auto">
    <h1 className={`${darkMode ? 'text-center text-[24px] text-white font-extrabold' : 'text-center text-[24px] text-black font-extrabold'} `}>
      Starred Repositories
    </h1>
    <div id='gradient' class="gradient-border rounded-lg">
      <div class="relative bg-grey rounded-lg p-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {starredRepos && starredRepos.map((repo) => (
          <li id='font2' key={repo.id} className="p-4  dark:bg-gray-800 rounded-lg shadow transition transform hover:scale-105 border border-[5px]">
            <h4 className="font-semibold text-[17px]">{repo.name}</h4>
            <p>{repo.description || "No description available"}</p>
            <span className="block">⭐ {repo.stargazers_count}</span>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-violet-700   text-bold  hover:underline text-[17px]">
              Go to Starred Repository
            </a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  </div>

    </div>
  );
}

export default StarredList;
