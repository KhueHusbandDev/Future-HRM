import { Paper } from "@mantine/core";
import NotificationsList from "./components/NotificationsList";

export const Notifications = () => {
  return (
    <>
      <Paper className="flex flex-col flex-nowrap w-full h-full border-solid border border-slate-200 rounded-md p-4 gap-8">
        <NotificationsList />
      </Paper>
    </>
  );
};
