import { useEffect, useState } from "react";
import axios from "axios";
import ConsoleButton from "@/components/Console/ConsoleButton";
import ConnectedConsole from "@/components/Console/ConnectedConsole";

function SearchConsoleForm() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/google/user");

        setData(res.data);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div>{data ? <ConnectedConsole data={data} /> : <ConsoleButton />}</div>
  );
}

export default SearchConsoleForm;
