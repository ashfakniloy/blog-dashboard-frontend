import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { navLinks } from "./navLinks";

function Layout({ children }) {
  const { pathname } = useRouter();

  if (pathname === "/sign-in") {
    return <>{children}</>;
  }

  return (
    <div className="lg:flex">
      <Sidebar navLinks={navLinks} />

      <div className="lg:flex-1 relative bg-white">
        {/* <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}

        <main className="my-10 mx-2 lg:mx-7">{children}</main>
      </div>
    </div>
  );
}

export default Layout;

// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import useToggle from "@/hooks/useToggle";
// import Sidebar from "./Sidebar";
// // import Header from "./Header";
// import { navLinks } from "./navLinks";

// function Layout({ children }) {
//   const { toggle: showSidebar, setToggle: setShowSidebar, node } = useToggle();
//   const { pathname } = useRouter();

//   useEffect(() => {
//     setShowSidebar(false);
//   }, [pathname]);

//   if (pathname === "/sign-in") {
//     return <div className="">{children}</div>;
//   }

//   return (
//     <div className="lg:flex">
//       <Sidebar
//         node={node}
//         showSidebar={showSidebar}
//         setShowSidebar={setShowSidebar}
//         navLinks={navLinks}
//       />

//       <div className="lg:flex-1 relative bg-white">
//         {/* <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}

//         <main className="my-10 mx-2 lg:mx-7">{children}</main>
//       </div>
//     </div>
//   );
// }

// export default Layout;
