import Head from "next/head";
import { useRouter } from "next/router";

function PageWrapper({ title, description, heading, isLoading, children }) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title || "Title"}</title>
        <meta name="description" content={description || "description"} />
      </Head>

      {heading && (
        <div className="leading-10 pb-7 border-b border-gray-300 flex justify-between">
          <div className="">
            <h1 className="text-[35px] font-extrabold">{heading}</h1>
            {pathname === "/" && (
              <p className="text-sm font-medium">
                Hi{" "}
                <span className="text-custom-orange">
                  Bayshore Communication
                </span>
                , Welcome back!
              </p>
            )}
          </div>
          <div className="">
            <p className="text-xl font-bold text-custom-orange">
              Bayshore Communication
            </p>
          </div>
        </div>
      )}

      {children}
    </>
  );
}

export default PageWrapper;

// import { useRouter } from "next/router";

// function PageHeader({ pageTitle }) {
//   const { pathname } = useRouter();

//   return (
//     <div className="leading-10 pb-7 border-b border-gray-300 flex justify-between">
//       <div className="">
//         <h1 className="text-[35px] font-extrabold">{pageTitle}</h1>
//         {pathname === "/" && (
//           <p className="text-sm font-medium">
//             Hi{" "}
//             <span className="text-custom-orange">Bayshore Communication</span>,
//             Welcome back!
//           </p>
//         )}
//       </div>
//       <div className="">
//         <p className="text-xl font-bold text-custom-orange">
//           Bayshore Communication
//         </p>
//       </div>
//     </div>
//   );
// }

// export default PageHeader;
