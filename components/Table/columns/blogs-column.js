import Link from "next/link";
import DeleteBlog from "../actions/DeleteBlog";
import { IconEdit } from "@/components/Icons";

export const blogsColumn = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Meta Description",
    accessor: "metaDescription",
  },
  {
    Header: "Status",
    accessor: "published",
    Cell: ({ row }) => <>{row.original.published ? "Publish" : "Draft"}</>,
  },
  // {
  //   Header: "Status",
  //   accessor: "status",
  //   // minWidth: 400,
  //   // width: 200,
  // },
  {
    Header: "Action",
    accessor: "_id",
    disableSortBy: true,
    width: 200,
    Cell: ({ row }) => (
      // <div className="flex justify-center items-center gap-2">
      <div className="flex items-center gap-2">
        <DeleteBlog blogInfo={row.original} />

        <div className="">
          <Link href="/blog/edit-blog" className="text-black">
            <IconEdit />
          </Link>
        </div>
      </div>
    ),
  },
];

// import Link from "next/link";
// import DeleteBlog from "../actions/DeleteBlog";
// import { IconEdit } from "@/components/Icons";

// export const blogsColumn = [
//   {
//     header: "Title",
//     accessorKey: "title",
//   },
//   {
//     header: "Meta Description",
//     accessorKey: "meta_desc",
//   },
//   {
//     header: "Status",
//     accessorKey: "status",
//     // minWidth: 400,
//     // width: 200,
//   },
//   {
//     header: "Action",
//     accessorKey: "_id",
//     disableSortBy: true,
//     width: 200,
//     cell: ({ row }) => (
//       <div className="flex justify-center items-center gap-2">
//         <DeleteBlog blogInfo={row.original} />

//         <div className="">
//           <Link href="/blog/edit-blog" className="text-black">
//             <IconEdit />
//           </Link>
//         </div>
//       </div>
//     ),
//   },
// ];
