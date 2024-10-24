// "use client";

import AllEvents from "@/components/events/All";

// import { useState } from "react";

// export default function Home() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
//     const loginid = formData.get("loginid");
//     const password = formData.get("password");
//     if (!loginid || !password) {
//       return;
//     }
//     console.log(loginid, password);
//     fetch("/api/authorize", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         loginid: loginid,
//         password: password, //dont add a comma.
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.error) {
//           alert(data.error);
//         } else {
//           alert("Success");
//         }
//       });
//   };

//   const handleSubmitTwo = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
//     const loginid = formData.get("loginid");
//     if (!loginid) {
//       return;
//     }
//     console.log(loginid);
//     fetch("/api/checkuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         loginid: loginid,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.error) {
//           alert(data.error);
//         } else {
//           alert("Success");
//         }
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="loginid" placeholder="Login ID" />
//         <input type="password" name="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//       <form onSubmit={handleSubmitTwo}>
//         <input type="text" name="loginid" placeholder="Login ID" />
//         <button type="submit">Check User</button>
//       </form>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <AllEvents />
    </div>
  );
}
