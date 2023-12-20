import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiURL}/auth`;

const useAuth = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<string>();
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get(url + "/get/user");
        const userData = response.data;

        console.log("User is logged in", userData);
        setRole(userData.role);
        setUsername(userData.username);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
        console.log("User is not logged in");
        router.push("/"); // Redirect to the home screen if not logged in
      }
    };

    checkLoggedIn();
  }, [router]);

  return { isLoggedIn, role, username };
};

export default useAuth;
