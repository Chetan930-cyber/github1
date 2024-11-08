import Github from "./assets/github-logo.png"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserRepos, fetchStarredRepos, toggleTheme } from './features/redux/UserSlice';
import RepositoryList from './components/RepositoryList';
import StarredList from './components/StarredList';
import UserInfo from './components/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';






function App() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { loading, error, userInfo, darkMode } = useSelector((state) => state.user);

  const handleSearch = () => {
    dispatch(fetchUser(username));
    dispatch(fetchUserRepos(username));
    dispatch(fetchStarredRepos(username));
    
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black-500 text-gray-50' : 'bg-gray-50 text-gray-900'} p-4 transition duration-300`}>
    <div>
    <img className={`${darkMode ? 'relative lg:left-12 left-18 top-0 rounded-full h-[40px] lg:h-[50px] fill-slate-50 bg-yellow-300' : 'relative left-18 rounded-full top-0 h-[40px]  lg:h-[50px] lg:left-12 '}`} src={Github} alt="" srcset="" />
    </div>
      <h1 className="text-[30px] mt-8 lg:mt-0  text-center font-bold">GitHub User Search</h1>
      <button
        onClick={handleThemeToggle}
        className={`absolute top-4 right-4 p-2 rounded transition duration-300 ${darkMode ? 'bg-gray-700 hover:bg-slate-500 hover:border-white hover:border-[5px]' : 'bg-gray-300 hover:bg-gray-700 hover:text-white hover:border-black  border-[4px] round'}`}
      >
        {darkMode ? 'Light Mode ' : 'Dark Mode'}
      </button>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="border p-2 rounded mr-2 text-black "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
     

        <button
          onClick={handleSearch}
          className={`${darkMode ? 'bg-green-500 hover:bg-green-700 text-white p-2 rounded font-bold' : 'bg-blue-500 text-white p-2 rounded font-bold hover:bg-blue-800 '}`}
        >
          Search
        </button>
       


      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userInfo && <UserInfo userInfo={userInfo} />}
      <RepositoryList />
      <StarredList />
     
      

     
    </div>
  );
}

export default App;
