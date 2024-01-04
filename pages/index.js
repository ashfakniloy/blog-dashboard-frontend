import PageWrapper from "@/components/Layout/PageWrapper";

// import { BetaAnalyticsDataClient } from "@google-analytics/data";

// const propertyId = process.env.GA_PROPERTY_ID;

// const analyticsDataClient = new BetaAnalyticsDataClient({
//   credentials: {
//     client_email: process.env.GA_CLIENT_EMAIL,
//     private_key: process.env.GA_PRIVATE_KEY?.replace(/\n/gm, "\n"),
//   },
// });

// const fetchReportData = async () => {
//   const [response] = await analyticsDataClient.runReport({
//     property: `properties/${propertyId}`,
//     dateRanges: [
//       {
//         startDate: `7daysAgo`, //  e.g. "7daysAgo" or "30daysAgo"
//         endDate: "today",
//       },
//     ],
//     dimensions: [
//       {
//         name: "year", // data will be year wise
//       },
//     ],
//     metrics: [
//       {
//         name: "activeUsers", // it returs the active users
//       },
//     ],
//   });

//   return response;
// };

export default function Home() {
  return (
    <PageWrapper title="Dashboard" description="dashboard" heading="Dashboard">
      <div className="">Homepage</div>
    </PageWrapper>
  );
}
