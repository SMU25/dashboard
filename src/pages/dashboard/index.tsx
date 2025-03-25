import { PageLayout } from "@/components/Layouts/PageLayout";
import { UsersList } from "@/page-components/dashboard/UsersList";
import React, { FC } from "react";

const Dashboard: FC = () => {
  return (
    <PageLayout>
      <UsersList />
    </PageLayout>
  );
};

export default Dashboard;
