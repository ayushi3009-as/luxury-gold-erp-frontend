"use client";

import { useSearchParams } from "next/navigation";

import JobCardHeader from "@/components/manufacturing-manager/job-cards/JobCardHeader";
import JobCardTabs from "@/components/manufacturing-manager/job-cards/JobCardTabs";
import JobCardTable from "@/components/manufacturing-manager/job-cards/JobCardTable";
import JobCardForm from "@/components/manufacturing-manager/job-cards/JobCardForm";
import JobCardDetails from "@/components/manufacturing-manager/job-cards/JobCardDetails";
import BookmarkList from "@/components/manufacturing-manager/job-cards/BookmarkList";

export default function JobCardsPage() {

  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "all";

  const id = searchParams.get("id") || "";

  return (

    <div className="space-y-6">

      <JobCardHeader />

      <JobCardTabs />

      {tab === "all" && <JobCardTable />}

      {tab === "add" && <JobCardForm />}

      {tab === "details" && (

        <JobCardDetails id={id} />

      )}

      {tab === "edit" && (

        <JobCardForm id={id} />

      )}

      {tab === "bookmark" && <BookmarkList />}

    </div>

  );
}