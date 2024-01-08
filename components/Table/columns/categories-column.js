import DeleteCategory from "../actions/DeleteCategory";

export const categoriesColumn = [
  {
    header: "#",
    accessorKey: "_id",
    size: 70,
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Action",
    accessorKey: "_id",
    enableSorting: false,
    size: 100,
    cell: ({ row }) => (
      <div className="">
        <DeleteCategory categoryInfo={row.original} />
      </div>
    ),
  },
];

// // with react table v7
// import DeleteCategory from "../actions/DeleteCategory";

// export const categoriesColumn = [
//   {
//     Header: "Name",
//     accessor: "name",
//     // width: "auto",
//   },
//   {
//     Header: "Action",
//     accessor: "_id",
//     disableSortBy: true,
//     // width: 200,
//     // width: "auto",
//     Cell: ({ row }) => (
//       <div className="">
//         <DeleteCategory categoryInfo={row.original} />
//       </div>
//     ),
//   },
// ];
