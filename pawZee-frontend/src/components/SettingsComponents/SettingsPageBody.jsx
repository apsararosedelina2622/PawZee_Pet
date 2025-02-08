import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContextProvider';

const SettingsPage = () => {

  const { user, setUser, selectedSection, setSelectedSection, newProfilePhoto, handleProfileImageChange, handleRemoveProfileImage, handleSaveProfileChanges, Title, handleDeleteAccount }= useContext(AppContext);

  return (

    <div className="flex h-screen">

      <div className="lg:w-1/4 xl:w-1/5 md:w-1/3 hidden shadow-xl p-4 lg:flex md:flex flex-col items-center">
        <div className='my-8'>
          {user && user.username ? (
            user.profile_photo && user.profile_photo.startsWith('data:image/') ? (
              <img
                src={user.profile_photo}
                alt="Profile"
                className="w-40 h-40 object-cover rounded-full mx-auto"
              />
              ) : (
                <div className="w-28 h-28 bg-gradient-to-r from-[#6a70d1] to-purple-400 flex items-center justify-center rounded-full text-white text-4xl">
                  {user.username.charAt(0).toUpperCase()}
                </div>
            )) : (
            <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full text-gray-700 text-xl">
              ?
            </div>
          )}

          { user && user.username ? (
            <p className='text-center mt-4 text-2xl font-semibold'>{user.name}</p>
          ) : ''}
        </div>
        <div className="w-full">
          <button onClick={() => setSelectedSection('details')} className='text-start block w-full py-2 px-4 text-lg mb-4 hover:font-semibold text-white bg-gradient-to-r from-[#6a70d1] to-purple-400'>
            <i className="ri-user-line mr-2"></i>User Details
          </button>
          <button onClick={() => setSelectedSection('editProfile')} className='text-start block w-full py-2 px-4 text-lg mb-4 hover:font-semibold text-white bg-gradient-to-r from-[#6a70d1] to-purple-400 shadow-xl'>
          <i className="ri-user-settings-line mr-2"></i>Edit Profile
          </button>
          <Link to='/home'>
            <button className="text-start block w-full py-2 px-4 text-lg mb-4 hover:font-semibold text-white bg-gradient-to-r from-[#6a70d1] to-purple-400">
            <i className="ri-home-4-line mr-2"></i>Go to Home
            </button>
          </Link>
          <Link to='/logout'>
            <button className="text-start block w-full py-2 px-4 text-lg mb-4 hover:font-semibold text-white bg-gradient-to-r from-[#6a70d1] to-purple-400">
            <i className="ri-logout-box-line mr-2"></i>Logout
            </button>
          </Link>
          <button onClick={handleDeleteAccount} className="text-start block w-full hover:font-semibold py-2 px-4 text-lg mb-4 bg-red-200 text-red-600">
          <i className="ri-delete-bin-2-line mr-2"></i>Delete Account
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto">

        <div className='flex justify-between px-5 py-5 bg-purple-100 text-xl border-b-2 border-indigo-500 font-semibold'>
          <p className=''>{Title()}</p>
          <div className="lg:hidden md:hidden">
            <label htmlFor="settings-drawer" className="cursor-pointer">
              <i className="ri-user-settings-line border-2 border-indigo-500 rounded-lg p-2"></i>
            </label>
          </div>

        </div>

        {selectedSection === 'details' && (
          <div className='lg:mx-20 md:mx-20 mx-10 lg:w-1/2'>
            <div className="lg:m-10 md:m-10 my-10">
              {user.profile_photo &&
                user.profile_photo.startsWith("data:image/") ? (
                <img src={user.profile_photo} alt="Profile" className="lg:w-52 lg:h-52 w-4/6  object-cover rounded-full mx-auto"/>
                ) : (
                <div className="lg:w-44 lg:h-44 w-28 h-28 bg-gradient-to-r mx-auto from-[#6a70d1] to-purple-400 flex items-center justify-center rounded-full text-white lg:text-7xl text-5xl">
                  {user.username.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <table className='flex lg:gap-96 md:gap-44 gap-14'>
              <thead>
                <tr className='flex flex-col gap-8'>
                  <th className='text-start'>Name</th>
                  <th className='text-start'>Email</th>
                  <th className='text-start'>Mobile</th>
                  <th className='text-start'>Username</th>
                  <th className='text-start'>Password</th>
                  <th className='text-start'>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr className='flex flex-col gap-8'>
                  <td className="text-start">{user.name}</td>
                  <td className="text-start">{user.email}</td>
                  <td className="text-start">{user.mobile}</td>
                  <td className="text-start">{user.username}</td>
                  <td className="text-start">{user.password}</td>
                  <td className="text-start">{user.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

          {selectedSection === 'editProfile' && (

            <div className='flex flex-col p-8 gap-5 lg:w-7/12 md:w-9/12'>

              <div className="relative w-40 h-40 mx-auto cursor-pointer" onClick={() => document.getElementById("profileImageInput").click()}>

                <input type="file" id="profileImageInput" onChange={handleProfileImageChange} className="hidden" />

                {newProfilePhoto || (user.profile_photo && user.profile_photo.startsWith('data:image/')) ? (
                  <img src={newProfilePhoto || user.profile_photo} alt="Profile Preview" className="w-full h-full object-cover rounded-full"/>
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#6a70d1] to-purple-400 flex items-center justify-center rounded-full text-white text-7xl mx-auto">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                )}

              </div>

              <button className="mt-2 text-red-500 text-end underline hover:text-red-700" onClick={handleRemoveProfileImage}>
                Remove Profile Image
              </button>

              <div className="flex flex-col gap-5">
                <p>Name</p>
                <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(42vw,260px)]" placeholder="Type Here" required />
              </div>

              <div className="flex flex-col gap-5">
                <p>Mobile</p>
                <input type="number" value={user.mobile} onChange={(e) => setUser({ ...user, mobile: e.target.value })}className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(42vw,260px)]" placeholder="Type Here" required />
              </div>

              <div className="flex flex-col gap-5">
                <p>Username</p>
                <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(42vw,260px)]" placeholder="Type Here" required />
              </div>

              <div className="flex flex-col gap-5">
                <p>Password</p>
                <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(42vw,260px)]" placeholder="Type Here" required />
              </div>

              <div className="flex flex-col gap-5">
                <p>Email</p>
                <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(42vw,260px)]" placeholder="Type Here" required />
              </div>

              <div className="flex flex-col gap-5">
                <p>Address</p>
                <input type="text" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })}className="bg-transparent outline-[#6a70d1] border-2 border-gray-400 p-3 w-[max(42vw,260px)]" placeholder="Type Here" required />
              </div>

              <button onClick={handleSaveProfileChanges} className="my-5 p-3 w-[max(42vw,260px)] text-lg text-white bg-gradient-to-r from-[#6a70d1] to-purple-400 shadow-xl hover:bg-gradient-to-l">
                Save Changes
              </button>

            </div>

          )}

        {/* Settings Drawer */}
        
        <div className="drawer drawer-end z-50">
          <input id="settings-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
          </div>
          <div className="drawer-side">

            <label htmlFor="settings-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

            <div className="menu bg-white text-base-content shadow-lg rounded-b-lg min-h-full xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4">
              <label htmlFor="settings-drawer" className="text-purple-600 font-bold  bg-gray-100 w-8 h-8 p-2 rounded-full flex items-center justify-center ml-auto">
                <i className="ri-close-large-line cursor-pointer"></i>
              </label>
              <div className="w-full">
                <button onClick={() => setSelectedSection('details')} className='text-start block w-full py-2 px-4 text-lg mb-4 hover:font-semibold text-white bg-gradient-to-r from-[#6a70d1] to-purple-400'>
                  <i className="ri-user-line mr-2"></i>User Details
                </button>
                <button onClick={() => setSelectedSection('editProfile')} className='text-start block w-full py-2 px-4 text-lg mb-4 hover:font-semibold text-white bg-gradient-to-r from-[#6a70d1] to-purple-400 shadow-xl'>
                <i className="ri-user-settings-line mr-2"></i>Edit Profile
                </button>
                <Link to='/home'>
                  <button className="text-start block w-full py-2 px-4 text-lg mb-4 hover:font-semibold text-white bg-gradient-to-r from-[#6a70d1] to-purple-400">
                  <i className="ri-home-4-line mr-2"></i>Go to Home
                  </button>
                </Link>
                <Link to='/logout'>
                  <button className="text-start block w-full py-2 px-4 text-lg mb-4 hover:font-semibold text-white bg-gradient-to-r from-[#6a70d1] to-purple-400">
                  <i className="ri-logout-box-line mr-2"></i>Logout
                  </button>
                </Link>
                <button onClick={handleDeleteAccount} className="text-start block w-full hover:font-semibold py-2 px-4 text-lg mb-4 bg-red-200 text-red-600">
                <i className="ri-delete-bin-2-line mr-2"></i>Delete Account
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;