// import React, { useContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import POST from "../js/POST";
// import { useNavigate, useLocation } from "react-router-dom";

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   const [btndisable, setbtndisable] = useState(false);
//   const [Okanimation, setOkanimation] = useState(false);
//   const [User, setUser] = useState({
//     isUserLogin: false,
//     userInfo: {},
//   });
//   const [loading, setLoading] = useState(true); // ✅ loading state

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const token = localStorage.getItem("Mvtechtoken");
//     CheckUserValid(token);
//   }, []);

//   const CheckUserValid = async (token) => {
//     if (!token) {
//       setLoading(false);
//       navigate("/login");
//       return;
//     }

//     try {
//       const user_exist = jwtDecode(token);
//       const { email } = user_exist;

//       const responce = await POST("verify-user", { email });


//       if (responce.statusCode === 200 && responce.user === true) {
//         setUser({
//           isUserLogin: true,
//           userInfo: user_exist,
//         });

//         // ✅ Only redirect to "/" if on login page
//         if (location.pathname === "/login") {

//           navigate("/");
//         }
//       } else {

//         navigate("/login");
//       }

//       // console.log(responce);
//     } catch (error) {
//       console.error("Token decode or verify failed:", error);
//       // navigate("/login");
//     } finally {
//       setLoading(false); // ✅ Done checking
//     }
//   };

//   // ✅ Don't render anything until token check is done
//   if (loading) return null;

//   return (
//     <AppContext.Provider
//       value={{
//         User,
//         setUser,
//         Okanimation,
//         setOkanimation,
//         setbtndisable,
//         btndisable,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// const useGlobalcontext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider, useGlobalcontext };










import React, { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import POST from "../js/POST";
import { useNavigate, useLocation } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [btndisable, setbtndisable] = useState(false);
  const [Okanimation, setOkanimation] = useState(false);
  const [User, setUser] = useState({
    isUserLogin: false,
    userInfo: {},
  });
  const [loading, setLoading] = useState(true); // ✅ loading state

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("Mvtechtoken");
    if (token) {
      CheckUserValid(token);
    } else {
      setLoading(false); // If no token, stop loading and allow access to public pages
    }
  }, []); // ✅ Empty dependency ensures it runs once on mount

  const CheckUserValid = async (token) => {
    try {
      const user_exist = jwtDecode(token);
      const { email } = user_exist;

      const response = await POST("verify-user", { email });

      if (response.statusCode === 200 && response.user === true) {
        setUser({
          isUserLogin: true,
          userInfo: user_exist,
        });

        // ✅ Only redirect to "/" if on login page
        if (location.pathname === "/login") {
          navigate("/");
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Token decode or verify failed:", error);
      // If there’s an error, redirect to login
      navigate("/login");
    } finally {
      setLoading(false); // ✅ Done checking
    }
  };

  // ✅ Don't render anything until token check is done
  if (loading) return null;

  return (
    <AppContext.Provider
      value={{
        User,
        setUser,
        Okanimation,
        setOkanimation,
        setbtndisable,
        btndisable,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalcontext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalcontext };
