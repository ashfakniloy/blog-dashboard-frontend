import { getFormatedDateTime } from "@/utils/getFormatedDateTime";

export const messagesColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Message",
    accessor: "message",
  },
  {
    Header: "Date & Time",
    accessor: "createdAt",
    Cell: ({ row }) => <>{getFormatedDateTime(row.original.createdAt)}</>,
  },
];
