"use client";

import React, { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";
import Image from "next/image";
import gkilogo from "../assets/img/gkilogo.png";
import Link from "next/link";
import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/auth`;

type ResponsiveNavbarProps = {
  children: React.ReactNode;
};

const ResponsiveNavbar: React.FC<ResponsiveNavbarProps> = ({ children }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const {isLoggedIn, role, username} = useAuth()
  const [role, setRole] = useState();
  const [reloadKey, setReloadKey] = useState(0);

  const logout = async () => {
    await axios.post(url + "/logout");
    router.refresh();
    setIsLoggedIn((prevIsLoggedIn) => false);
    router.push("/");
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      var userData = null;
      try {
        const response = await axios.get(url + "/get/user");
        userData = response.data;

        console.log("User is logged in", userData);
        // setRole(userData.role);
        // // console.log(role);
        // setIsLoggedIn((prevIsLoggedIn) => true);
      } catch (error) {
        // setIsLoggedIn((prevIsLoggedIn) => false);
        console.log("User is not logged in");
      }

      if (userData) {
        setRole(userData.role);
        setIsLoggedIn((prevIsLoggedIn) => true);
      } else {
        setIsLoggedIn((prev) => false);
      }
      // console.log(isLoggedIn);
    };

    checkLoggedIn();
  }, [isLoggedIn]);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100 z-40 shadow-xl sticky top-0">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Image src={gkilogo} alt="no image" className="w-7 h-7 mx-3" />
            GKI Taman Cibunut
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li className="font-normal">
                <Link href="/">Home</Link>
              </li>
              <li className="font-normal">
                <Link href="/pelayanan/umum">Pelayanan</Link>
              </li>
              <li className="font-normal">
                <Link href="/kegiatan">Kegiatan</Link>
              </li>
              <li>
                <details className="dropdown">
                  <summary>Tentang Kami</summary>
                  <ul>
                    <li>
                      <Link href={"/sejarah"}>Sejarah</Link>
                    </li>
                    <li>
                      <Link href={"/yayasan"}>Yayasan</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                {isLoggedIn ? (
                  <details className="dropdown">
                    <summary>Admin Panel</summary>
                    <ul>
                      {(role === "ADMIN" || role === "SUPERADMIN") && (
                        <li className="font-normal">
                          <Link href="/admin/tabel-jemaat">
                            Pendataan Jemaat
                          </Link>
                        </li>
                      )}

                      <li className="font-normal">
                        <Link href="/admin/kelola-kegiatan">
                          Pengelolaan Kegiatan
                        </Link>
                      </li>
                      {(role === "ADMIN" || role === "SUPERADMIN") && (
                        <li className="font-normal">
                          <Link href="/admin/kelola-pelayanan/umum">
                            Pengelolaan Pelayanan
                          </Link>
                        </li>
                      )}

                      {(role === "ADMIN" || role === "SUPERADMIN") && (
                        <li className="font-normal">
                          <Link href="/admin/add-user">User Management</Link>
                        </li>
                      )}

                      <li>
                        <button onClick={logout}>Logout</button>
                      </li>
                    </ul>
                  </details>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          Main Tabs
          <li className="font-normal">
            <Link href="/" aria-label="close sidebar">
              Home
            </Link>
          </li>
          <li className="font-normal">
            <Link href="/pelayanan/umum" aria-label="close sidebar">
              Pelayanan
            </Link>
          </li>
          <li className="font-normal">
            <Link href="/kegiatan" aria-label="close sidebar">
              Kegiatan
            </Link>
          </li>
          <li>
            <details className="dropdown">
              <summary>Tentang Kami</summary>
              <ul>
                <li>
                  <Link href="/pendeta" aria-label="close sidebar">
                    Pendeta Kami
                  </Link>
                </li>
                <li>
                  <Link href={"/sejarah"} aria-label="close sidebar">
                    Sejarah
                  </Link>
                </li>
                <li>
                  <Link href={""} aria-label="close sidebar">
                    Kontak Kami
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          {isLoggedIn ? (
            <li>
              <details className="dropdown">
                <summary>Admin Tabs</summary>
                <ul>
                  {(role === "ADMIN" || role === "SUPERADMIN") && (
                    <li className="font-normal">
                      <Link href="/admin/tabel-jemaat">Pendataan Jemaat</Link>
                    </li>
                  )}

                  <li className="font-normal">
                    <Link
                      href="/admin/kelola-kegiatan"
                      aria-label="close sidebar"
                    >
                      Pengelolaan Kegiatan
                    </Link>
                  </li>
                  {(role === "ADMIN" || role === "SUPERADMIN") && (
                    <li className="font-normal">
                      <Link
                        href="/admin/kelola-pelayanan/umum"
                        aria-label="close sidebar"
                      >
                        Pengelolaan Pelayanan
                      </Link>
                    </li>
                  )}

                  {(role === "ADMIN" || role === "SUPERADMIN") && (
                    <li className="font-normal">
                      <Link href="/admin/add-user" aria-label="close sidebar">
                        User Management
                      </Link>
                    </li>
                  )}

                  {(role === "ADMIN" || role === "SUPERADMIN") && (
                    <li className="font-normal">
                      <Link href="/admin/add-user">User Management</Link>
                    </li>
                  )}
                  <li>
                    <button onClick={logout} aria-label="close sidebar">
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
