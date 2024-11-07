
import React from 'react';
import { useSelector } from 'react-redux';

function UserInfo({ userInfo }) {
  const { darkMode } = useSelector((state) => state.user);

  return (
    <>



      <div className="flex flex-col items-center bg-orange-100 dark:bg-gray-900 rounded-lg shadow-lg p-6 mt-4 transition duration-300">
      
        <img src={userInfo.avatar_url} alt="Avatar" className={`${darkMode ? 'w-32 h-32 rounded-full mb-4 border border-[3px]' : 'w-32 h-32 rounded-full mb-4 border border-[4px] border-pink-500'} `} />
        <h2 className="text-2xl font-bold">{userInfo.name}</h2>
        
        <div className="flex space-x-4 mt-4">
          <div id="repos" className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:border-[5px] hover:border-orange-500">
            <h3 className="rounded-lg   shadow-md text-black font-semibold ">Repositories</h3>
            <p className='text-black font-semibold text-center'>{userInfo.public_repos}</p>
          </div>
          <div id="follower" className="rounded-lg p-4 shadow-md text-black font-semibold hover:border-[5px] hover:border-blue-500">
            <h3>Followers</h3>
            <p className='text-black font-semibold text-center'>{userInfo.followers}</p>
          </div>
          <div id="following" className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:border-[5px] hover:border-green-500">
            <h3 className="rounded-lg  shadow-md text-black font-semibold  ">Following</h3>
            <p className='text-black font-semibold text-center'>{userInfo.following}</p>
          </div>
        </div>

        <a
          href={userInfo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-blue-500 text-[18px] font-extrabold hover:underline"
        >
          View Profile
        </a>
      </div>

      <div className="p-1 w-full h-[100px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-4">
        <img
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1391602283/photo/white-fractal-horizon.webp?a=1&b=1&s=612x612&w=0&k=20&c=FhLDy7EeubUt5rLW6DvoVmt1jrEAMBjMaK6a_brxOv0="
          alt="Background"
        />
        <div className="flex items-center justify-center p-4 rounded-lg">
          <span id="text1" className={`${darkMode ? 'text-red-600 font-bold flex items-center space-x-2' : 'text-pink-600 font-bold flex items-center space-x-2'} `}>
            <i id="location" className="fa-solid fa-location-dot text-[25px]"></i>
            <p id="location2" className="text-[25px]">(Location: {userInfo.location || 'Not provided'})</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default UserInfo;