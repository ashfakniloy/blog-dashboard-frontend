import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import RobotsTextForm from "./RobotsTextForm";
import SitemapForm from "./SitemapForm";
import SearchConsoleForm from "./SearchConsoleForm";
import CanonicalUrlForm from "./CanonicalUrlForm";

const initialValues = {
  robot_text: "robot text value",
  sitemap: "sitemap value",
  discourage: true,
};

function SeoSettings() {
  const seoOptions = [
    {
      name: "RobotsText",
      param: "robots_text",
      formComponent: RobotsTextForm,
    },
    {
      name: "Sitemap",
      param: "sitemap",
      formComponent: SitemapForm,
    },
    {
      name: "Search Console",
      param: "search_consol",
      formComponent: SearchConsoleForm,
    },
    {
      name: "Canonical",
      param: "canonical",
      formComponent: CanonicalUrlForm,
    },
  ];

  const [defaultOption, setDefaultOption] = useState("robots_text");

  const [isLoaded, setIsLoaded] = useState(false);

  const { query } = useRouter();

  const optionParam = query?.option;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return;

  const selectedOption =
    seoOptions.find((option) => option.param === optionParam) ||
    seoOptions.find((option) => option.param === defaultOption);

  const FormComponent = selectedOption.formComponent;

  return (
    <div className="mt-10">
      <div className="inline-flex items-center gap-8 pb-5 border-b border-gray-300">
        {seoOptions.map((option) => (
          <Link
            key={option.param}
            href={`/settings?option=${option.param}`}
            replace
            scroll={false}
            className={`text-3xl font-bold ${
              optionParam === option.param ||
              (!optionParam && option.param === defaultOption)
                ? "text-black"
                : "text-gray-400"
            }`}
          >
            {option.name}
          </Link>
        ))}
      </div>

      <div className="mt-5">
        <FormComponent values={initialValues} />
      </div>
    </div>
  );
}

export default SeoSettings;
