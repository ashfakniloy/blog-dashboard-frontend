import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { IconLogout } from "../Icons/IconLogout";
import { useSiteInfo } from "@/lib/store";
import useTheme from "@/hooks/useTheme";
import useSignout from "@/hooks/useSignout";
import useLogo from "@/hooks/useLogo";

function Sidebar({ navLinks }) {
  const router = useRouter();
  const theme = useTheme();
  const logo = useLogo();
  const { setUsername } = useSiteInfo();

  const { signout } = useSignout();

  const activeClass = (path) => {
    if (path === "/" && router.pathname === path) {
      return {
        backgroundColor: theme,
        color: "white",
      };
    }

    if (path !== "/" && router.pathname.includes(path)) {
      return {
        backgroundColor: theme,
        color: "white",
      };
    }

    return {
      color: "black",
      // ":hover": {
      //   // backgroundColor: "#37b546/10",
      //   backgroundColor: theme,
      //   opacity: 0.4,
      // },
    };
  };

  const activeIcon = (path) => {
    if (path === "/" && router.pathname === path) {
      return {
        backgroundColor: theme,
        color: "white",
      };
    }

    if (path !== "/" && router.pathname.includes(path)) {
      return {
        backgroundColor: theme,
        color: "white",
      };
    }

    return {
      color: theme,
    };
  };

  return (
    <div className="sidebar h-screen overflow-y-auto bg-white z-30 top-0 bottom-0 sticky border-r border-gray-400 w-[260px]">
      <div className="mb-5">
        <div className="px-[47px] py-9">
          <div className="relative w-[155px] h-[96px]">
            {logo && (
              <Image
                // src="/images/static-logo.png"
                src={logo}
                alt="static logo"
                sizes="200px"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>

        <div className="mt-12 mx-[47px] space-y-5 text-[17px]">
          {navLinks?.map((navLink, i) => (
            <div key={i} className="w-[160px]">
              <Link href={navLink.link} passHref>
                <div
                  className={`px-6 py-2 flex justify-between items-center rounded-full font-semibold transition-colors duration-200 hover:bg-gray-100`}
                  style={activeClass(navLink.link)}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="transition-colors duration-200"
                      style={activeIcon(navLink.link)}
                    >
                      {navLink.icon}
                    </span>

                    <p>{navLink.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          <button
            type="button"
            className={`px-6 py-2 flex justify-between items-center group font-semibold transition-colors duration-200 rounded-full w-[160px] hover:bg-gray-100`}
            // style={{
            //   ":active": {
            //     backgroundColor: theme,
            //     color: "white",
            //   },
            // }}
            onClick={() => {
              signout();
              setUsername(null);
            }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: theme }}>
                <IconLogout />
              </span>
              <p>Logout</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { IconLogout } from "../Icons/IconLogout";
// // import { FaAngleLeft, FaAngleDown } from "react-icons/fa";

// function Sidebar({ showSidebar, setShowSidebar, node, navLinks }) {
//   // const [role, setRole] = useState("root");
//   const router = useRouter();
//   const [showSubMenu, setShowSubMenu] = useState("");

//   // console.log("pathname", router.pathname);

//   // console.log("usersession", data);

//   // const username = data?.user?.username;

//   // const [active, setActive] = useState("");

//   const activeClass = (path) => {
//     // if (router.pathname === path) {
//     //   return "bg-custom-orange text-white";
//     // }

//     if (path === "/" && router.pathname === path) {
//       return "bg-custom-orange text-white";
//     }

//     if (path !== "/" && router.pathname.includes(path)) {
//       return "bg-custom-orange text-white";
//     }

//     // if (router.pathname.includes(path)) {
//     //   return "bg-custom-orange text-white";
//     // }

//     return "text-black hover:bg-[#37b546]/10";
//   };

//   const activeIcon = (path) => {
//     // if (router.pathname === path) {
//     //   return "text-white";
//     // }

//     if (path === "/" && router.pathname === path) {
//       return "bg-custom-orange text-white";
//     }

//     if (path !== "/" && router.pathname.includes(path)) {
//       return "bg-custom-orange text-white";
//     }

//     // if (router.pathname.includes(path)) {
//     //   return "bg-custom-orange text-white";
//     // }

//     return "text-custom-orange";
//   };

//   // useEffect(() => {
//   //   const value = navLinks.map(
//   //     (navLink) =>
//   //       navLink.subLinks &&
//   //       navLink?.subLinks.find((subLink) => subLink.link === router.pathname)
//   //   );

//   //   // if (router.pathname === value?.link) {
//   //   if (router.pathname === value?.link) setShowSubMenu(true);
//   // }, []);

//   const menu = (index) => {
//     if (showSubMenu === index) {
//       return setShowSubMenu(null);
//     }
//     setShowSubMenu(index);
//   };

//   useEffect(() => {
//     if (showSidebar) {
//       document.body.classList.add("overflow-y-hidden");
//     }

//     return () => document.body.classList.remove("overflow-y-hidden");
//   }, [showSidebar]);

//   return (
//     <div
//       className={`
//         ${
//           showSidebar
//             ? "fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:bg-transparent"
//             : ""
//         }
//       `}
//     >
//       <div
//         ref={node}
//         className={`sidebar h-screen overflow-y-auto bg-white z-30 top-0 bottom-0 fixed lg:sticky border-r border-gray-400 lg:translate-x-0 w-[260px] ease-out duration-300 ${
//           showSidebar ? "translate-x-0" : "-translate-x-full"
//         }
//       `}
//       >
//         <div className="mb-5">
//           <div className="px-[47px] py-9">
//             <div className="relative w-[155px] h-[96px]">
//               <Image
//                 src="/images/static-logo.png"
//                 alt="static logo"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* <span
//               className="p-1 mr-5 rounded-full border-2 border-white text-white lg:hidden"
//               onClick={() => setShowSidebar(!showSidebar)}
//             >
//               <FaAngleLeft className="h-5 w-5" />
//             </span> */}
//           </div>

//           <div className="mt-12 mx-[47px] space-y-5 text-[17px]">
//             {navLinks?.map((navLink, i) => (
//               <div key={i} className="w-[160px]">
//                 <Link href={navLink.link} passHref>
//                   <div
//                     // key={i}
//                     className={`px-6 py-2 flex justify-between items-center font-semibold transition-colors duration-300 rounded-full ${activeClass(
//                       navLink.link
//                     )}`}
//                     // onClick={() => setShowSubMenu("")}
//                   >
//                     <div className="flex items-center gap-3">
//                       <span
//                         className={`transition-colors duration-300 ${activeIcon(
//                           navLink.link
//                         )}`}
//                       >
//                         {navLink.icon}
//                       </span>

//                       <p className="">{navLink.name}</p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}

//             <button
//               type="button"
//               className={`px-6 py-2 flex justify-between items-center group font-semibold transition-colors duration-300 rounded-full w-[160px] hover:bg-[#37b546]/10 active:bg-custom-orange active:text-white`}
//               onClick={() => router.push("/sign-in")}
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-custom-orange group-active:text-white group-active:transition-colors group-active:duration-300">
//                   <IconLogout />
//                 </span>

//                 <p className="">Logout</p>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
