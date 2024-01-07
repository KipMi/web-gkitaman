"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/auth`;

interface repoType {
  username: string;
  role: string;
  id: string;
  password: string;
}

interface TabelUserProps {
  allUser: repoType[];
  setAllUser: React.Dispatch<React.SetStateAction<repoType[]>>;
}

const TabelUser: React.FC<TabelUserProps> = ({ allUser, setAllUser }) => {
  // const [allUser, setAllUser] = useState<repoType[]>([]);

  const [message, setMessage] = useState<string | null>();

  const router = useRouter();

  const onDelete = async (id: string) => {
    try {
      await axios.delete(`${url}/${id}`);

      setMessage("User deleted");
      setAllUser((prevUsers) => prevUsers.filter((user) => user.id !== id));

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };

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
        {message ? <h1 className=" text-green-500">{message}</h1> : ""}
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
                  <Link
                    href={`/admin/add-user/edit-user/${items.id}`}
                    className="btn btn-info btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={(e) => onDelete(items.id)}
                  >
                    Delete
                  </button>
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
