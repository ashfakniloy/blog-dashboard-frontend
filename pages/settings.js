import AccountSettings from "@/components/Forms/AccountSettings";
import CompanyDetails from "@/components/Forms/CompanyDetails";
import SeoSettings from "@/components/Forms/SeoSettings";
import PageWrapper from "@/components/Layout/PageWrapper";

function SettingsPage() {
  const data = {
    name: "Bayshore Communication",
    color: "#000000",
    email: "mail@gmail.com",
    image: "/images/static-logo.png",
  };

  return (
    <PageWrapper title="Settings" description="settings" heading="Settings">
      <div className="mt-5 space-y-7">
        <CompanyDetails logo={data.image} name={data.name} color={data.color} />
        <AccountSettings currentEmail={data.email} />
      </div>
      <SeoSettings />
    </PageWrapper>
  );
}

export default SettingsPage;
