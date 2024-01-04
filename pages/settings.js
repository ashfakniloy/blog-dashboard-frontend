import AccountSettings from "@/components/Forms/AccountSettings";
import CompanyDetails from "@/components/Forms/CompanyDetails";
import SeoSettings from "@/components/Forms/SeoSettings";
import PageWrapper from "@/components/Layout/PageWrapper";
import useTheme from "@/hooks/useTheme";
// import { useSiteInfo } from "@/lib/store";

function SettingsPage() {
  // const { theme } = useSiteInfo();
  const theme = useTheme();

  const data = {
    name: "Bayshore Communication",
    color: theme,
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
