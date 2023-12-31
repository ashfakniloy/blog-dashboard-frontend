import PageWrapper from "@/components/Layout/PageWrapper";
import Table from "@/components/Table";
import { messagesColumn } from "@/components/Table/columns/messages-column";
import { messagesData } from "@/mockData/messagesData";

function MessagePage() {
  return (
    <PageWrapper title="Messages" description="messages" heading="Messages">
      {messagesData && <Table columns={messagesColumn} data={messagesData} />}
    </PageWrapper>
  );
}

export default MessagePage;
