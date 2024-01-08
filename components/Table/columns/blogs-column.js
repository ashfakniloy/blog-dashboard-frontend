import Link from "next/link";
import DeleteBlog from "../actions/DeleteBlog";
import { IconEdit } from "@/components/Icons";

export const blogsColumn = [
  {
    header: "Title",
    accessorKey: "title",
    size: 325,
  },
  {
    header: "Meta Description",
    accessorKey: "metaDescription",
  },
  {
    header: "Status",
    accessorKey: "published",
    size: 120,
    cell: ({ row }) => (row.original.published ? "Publish" : "Draft"),
  },
  {
    header: "Action",
    accessorKey: "slug",
    enableSorting: false,
    size: 100,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <DeleteBlog blogInfo={row.original} />

        <div className="">
          <Link
            href={`/blog/edit-blog/${row.original.slug}`}
            className="text-black"
          >
            <IconEdit />
          </Link>
        </div>
      </div>
    ),

    // accessorKey: "slug",
    // cell: (info) => (
    //   // <div className="flex justify-center items-center gap-2">
    //   <div className="flex items-center gap-2">
    //     <DeleteBlog blogInfo={info.row.original} />

    //     <div className="">
    //       <Link
    //         href={`/blog/edit-blog/${info.getValue()}`}
    //         // href={`/blog/edit-blog/${row.original.slug}`}
    //         className="text-black"
    //       >
    //         <IconEdit />
    //       </Link>
    //     </div>
    //   </div>
    // ),
  },
];

// // with react table v7
// import Link from "next/link";
// import DeleteBlog from "../actions/DeleteBlog";
// import { IconEdit } from "@/components/Icons";

// export const blogsColumn = [
//   {
//     Header: "Title",
//     accessor: "title",
//   },
//   {
//     Header: "Meta Description",
//     accessor: "metaDescription",
//   },
//   {
//     Header: "Status",
//     accessor: "published",
//     Cell: ({ row }) => <>{row.original.published ? "Publish" : "Draft"}</>,
//   },
//   // {
//   //   Header: "Status",
//   //   accessor: "status",
//   //   // minWidth: 400,
//   //   // width: 200,
//   // },
//   {
//     Header: "Action",
//     accessor: "_id",
//     disableSortBy: true,
//     width: 200,
//     Cell: ({ row }) => (
//       // <div className="flex justify-center items-center gap-2">
//       <div className="flex items-center gap-2">
//         <DeleteBlog blogInfo={row.original} />

//         <div className="">
//           <Link
//             href={`/blog/edit-blog/${row.original.slug}`}
//             className="text-black"
//           >
//             <IconEdit />
//           </Link>
//         </div>
//       </div>
//     ),
//   },
// ];
