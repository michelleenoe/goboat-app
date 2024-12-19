"use client";
import Link from "next/link";
import notFoundData from "./lib/content/notFoundData";
import { getLanguage } from "./lib/data/storage";

export default function NotFound() {
  const lang = getLanguage();

  const item = notFoundData[lang] || notFoundData.en;

  return (
    <section className="flex flex-col items-center justify-center mt-24 ">
      <h1 className="text-6xl font-bold text-goboatBlue dark:text-lightBlue">
        404
      </h1>
      <p className="mt-4 text-2xl font-semibold text-typoPrimary dark:text-lightBlue">
        {item.title}
      </p>
      <p className="mt-2 text-center text-typoSecondary dark:text-grey2">
        {item.description}
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-goboatBlue hover:bg-lightBlue text-grey2 hover:text-darkBlue rounded-full "
      >
        {item.goBack}
      </Link>
    </section>
  );
}
