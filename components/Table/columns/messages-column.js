import { getFormatedDateTime } from "@/utils/getFormatedDateTime";

export const messagesColumn = [
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
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "Message",
    accessorKey: "message",
  },
  {
    header: "Date & Time",
    accessorKey: "createdAt",
    cell: ({ row }) => getFormatedDateTime(row.original.createdAt),
  },
];

// import { getFormatedDateTime } from "@/utils/getFormatedDateTime";

// export const messagesColumn = [
//   {
//     Header: "Name",
//     accessor: "name",
//   },
//   {
//     Header: "Email",
//     accessor: "email",
//   },
//   {
//     Header: "Phone",
//     accessor: "phone",
//   },
//   {
//     Header: "Message",
//     accessor: "message",
//   },
//   {
//     Header: "Date & Time",
//     accessor: "createdAt",
//     Cell: ({ row }) => <>{getFormatedDateTime(row.original.createdAt)}</>,
//   },
// ];
