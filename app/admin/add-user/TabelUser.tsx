"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/auth`;

interface repoType {
  username: string;
  role: string;
}

const TabelUser = () => {
  const [allUser, setAllUser] = useState<repoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setAllUser(response.data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  try {
    return (
      <table className="table overflow-auto">
        <thead>
          <tr>
            <th>No.</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((items: repoType, i: number) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{items.username}</td>
                <td className="w-1/2 overflow-clip">{items.role}</td>
                <td className="flex justify-around">
                  <button className="btn btn-info btn-sm">Edit</button>
                  <button className="btn btn-error btn-sm">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } catch (error: any) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        Cannot retrieve table ({error.message})
      </div>
    );
  }
};

export default TabelUser;
