import DeleteCategory from "../actions/DeleteCategory";

export const categoriesColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Action",
    accessor: "_id",
    disableSortBy: true,
    // width: 200,
    width: 200,
    Cell: ({ row }) => (
      <div className="">
        <DeleteCategory categoryInfo={row.original} />
      </div>
    ),
  },
];

// / import DeleteCategory from "../actions/DeleteCategory";

// export const categoriesColumn = [
//   {
//     header: "Name",
//     accessorKey: "name",
//     width: "auto",
//   },
//   {
//     header: "Action",
//     accessorKey: "id",
//     disableSortBy: true,
//     size: 150,
//     // minWidth: 150,
//     // maxWidth: 150,
//     cell: ({ row }) => (
//       <div className="">
//         <DeleteCategory categoryInfo={row.getValue("id")} />
//       </div>
//     ),
//     // cell: ({ row }) => {
//     //   const amount = parseFloat(row.getValue("amount"))
//     //   const formatted = new Intl.NumberFormat("en-US", {
//     //     style: "currency",
//     //     currency: "USD",
//     //   }).format(amount)

//     //   return <div className="text-right font-medium">{formatted}</div>
//     // },
//   },
// ];
