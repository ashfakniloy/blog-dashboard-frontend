import PageWrapper from "@/components/Layout/PageWrapper";
import Table from "@/components/Table";
import { blogsColumn } from "@/components/Table/columns/blogs-column";
import LinkButton from "@/components/ui/LinkButton";
import { blogsData } from "@/mockData/blogsData";

function BlogPage() {
  return (
    <PageWrapper title="Blog" description="blog" heading="All Blogs">
      <div className="mt-10 flex justify-end">
        <LinkButton href="/blog/add-blog">New Post</LinkButton>
      </div>

      {blogsData && <Table columns={blogsColumn} data={blogsData} />}
    </PageWrapper>
  );
}

export default BlogPage;
