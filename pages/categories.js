import CategoryForm from "@/components/Forms/CategoryForm";
import PageWrapper from "@/components/Layout/PageWrapper";
import Table from "@/components/Table";
import { categoriesColumn } from "@/components/Table/columns/categories-column";
import { categoriesData } from "@/mockData/categoriesData";

function CategoriesPage() {
  return (
    <PageWrapper
      title="Categories"
      description="categories"
      heading="Add New Category"
    >
      <CategoryForm />

      {categoriesData && (
        <Table columns={categoriesColumn} data={categoriesData} />
      )}
    </PageWrapper>
  );
}

export default CategoriesPage;
