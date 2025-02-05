import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";

const User_Details = () => {
  const [data, setData] = useState([]);

  const Fetch_User_List = async () => {
    try {
      const response = await axios.get(`${url}/user_list`);
      if (response.data.success) {
        setData(response.data.user);
      } else {
        toast.error("Failed to fetch users");
      }
    } catch (error) {
      toast.error("User list error");
      console.error("Error fetching user list:", error);
    }
  };

  const Remove_User = async (id) => {
    try {
      const response = await axios.post(`${url}/user_list/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await Fetch_User_List();
      }
    } catch (error) {
      toast.error("Error occurred while removing the user");
    }
  };

  useEffect(() => {
    Fetch_User_List();
  }, []);

  return (
    <>
      <p className="mb-5 font-medium">User Details</p>

      <div className="overflow-x-auto mr-5 mb-10">
        <table className="min-w-full border-collapse border border-indigo-500">
          <thead>
            <tr className="bg-purple-100 border-b border-indigo-500">
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Profile</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Name</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Email</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Mobile</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Username</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Password</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Address</th>
              <th className="py-3 text-start lg:px-3 px-5 text-sm">Action</th>
            </tr>
          </thead>

          { data && data.length > 0 ? (
            data.map((user, index) => (
              <tbody key={index}>
                <tr>
                  <td className="py-3 lg:px-3 px-5">
                    {user && user.username ? (
                      user.profile_photo && user.profile_photo.startsWith('data:image/') ? (
                        <img
                          src={user.profile_photo}
                          alt="Profile"
                          className="w-10 h-10 object-cover rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-br from-[#6a70d1] to-purple-400 to-purple-400 flex items-center justify-center rounded-full text-white text-xl">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                      )
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-br from-[#6a70d1] to-purple-400 to-purple-400 flex items-center justify-center rounded-full text-white text-xl">
                        
                      </div>
                    )}
                  </td>
                  <td className="py-3 lg:px-3 px-5">{user.name}</td>
                  <td className="py-3 lg:px-3 px-5">{user.email}</td>
                  <td className="py-3 lg:px-3 px-5">{user.mobile}</td>
                  <td className="py-3 lg:px-3 px-5">{user.username}</td>
                  <td className="py-3 lg:px-3 px-5">{user.password}</td>
                  <td className="py-3 lg:px-3 px-5">{user.address}</td>
                  <td className="py-3 px-5 text-start">
                    <i
                      onClick={() => Remove_User(user._id)}
                      className="fa-solid fa-xmark hover:text-red-600 text-lg cursor-pointer"
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center py-3">
                No users found
              </td>
            </tr>
          )}
        </table>
      </div>
    </>
  );
};

export default User_Details;
