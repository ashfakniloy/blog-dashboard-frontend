import PageWrapper from "@/components/Layout/PageWrapper";
import useGetData from "@/hooks/useGetData";
import useTheme from "@/hooks/useTheme";

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
  const theme = useTheme();

  const { data: dashboardData, isPending } = useGetData({
    path: "/user/dashboard",
  });

  console.log("data", dashboardData);

  const messagesCount = [
    {
      name: "Today",
      count: dashboardData?.data.todayFound,
    },
    {
      name: "This Month",
      count: dashboardData?.data.thisMonthFound,
    },
    {
      name: "Total",
      count: dashboardData?.data.totalFound,
    },
  ];

  return (
    <PageWrapper
      title="Dashboard"
      description="dashboard"
      heading="Dashboard"
      isLoading={isPending}
    >
      <div className="mt-5">
        {dashboardData?.data && (
          <div className="">
            <p className="text-[35px] font-bold">Messages</p>
            <div className="mt-4 flex justify-between items-center gap-5">
              {messagesCount.map((message) => (
                <div
                  key={message.name}
                  className="h-[90px] 2xl:h-[100px] w-full flex justify-center items-center gap-3 rounded-2xl text-white"
                  style={{ backgroundColor: theme }}
                >
                  <span className="text-[25px] font-bold">{message.count}</span>
                  <span className="text-xl">{message.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
