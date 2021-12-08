// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { auth } from '../firebase/firebase.utils';
// import { Spin } from 'antd';

// // Tạo provider cho tất cả các component khác dùng được mà không phải truyền qua props
// export const AuthContext = React.createContext();

// function AuthProvider({ children }) {
//   const [user, setUser] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const history = useHistory();

//   useEffect(() => {
//     // Khi có sự thay đổi auth
//     const unsubcribed = auth.onAuthStateChanged((user) => {
//       if (user) {
//         const { displayName, email, uid, photoUrl } = user;
//         setUser({ displayName, email, uid, photoUrl });
//         setIsLoading(false);
//         history.push('/');
//         return;
//         // khi thành công thì dừng luôn, nếu không sẽ quay lại trang signin
//       }
//       // reset user info
//       setUser();
//       setIsLoading(false);
//       // Nếu lỗi thì quay lại trang login
//       history.push('/');
//     });
//     // clean function
//     return () => {
//       unsubcribed();
//     };
//   }, [history]);

//   return (
//     <AuthContext.Provider value={user}>
//       {isLoading ? <Spin /> : children}
//       {/* {children} */}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;
