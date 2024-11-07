
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function RepositoryList() {
  const repos = useSelector((state) => state.user.repos);
  const { darkMode } = useSelector((state) => state.user);

  return (
    <div className="relative inline-block mt-10 w-full h-auto">
      <h1
        className={`${
          darkMode ? "text-white" : "text-black"
        } text-center text-[24px] font-extrabold`}
      >
        Repositories
      </h1>
      <div className="gradient-border rounded-lg mt-4 relative">
        <div className="relative bg-blue  rounded-lg p-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {repos && repos.length > 0 ? (
              repos.map((repo) => (
                <li
                  key={repo.id}
                  className="p-4  border dark:bg-gray-800 rounded-lg shadow transition transform hover:scale-105 border border-[5px]"
                >
                  <h4 className="font-semibold text-[17px]">{repo.name}</h4>
                  <p>{repo.description || "No description available"}</p>
                  <span className="block">⭐ {repo.stargazers_count}</span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-[17px] font-bold"
                  >
                    Go to Repository
                  </a>
                </li>
              ))
            ) : (
              <p
                id="p1"
                className=" text-violet-500 mx-[200px]
               font-bold text-[17px]"
              >
                No repositories available.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RepositoryList;
