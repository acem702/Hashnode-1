import { useClickOutside } from "@mantine/hooks";
import Image from "next/image";
import { useContext, useEffect, useState, type FC } from "react";
import { toast } from "react-toastify";
import {
  Check,
  Follow,
  Notification as NotificationSVG,
  Search,
  Sun
} from "~/svgs";
import { api } from "~/utils/api";
import { C, type ContextValue } from "~/utils/context";
import ArticleProfileDropdown from "./ArticleProfileDropdown";
import NotAuthenticatedProfileDropdown from "./NotAuthenticatedProfileDropdown";
import Notification from "./Notification";

const ArticleRightArea: FC = () => {
  const [opened, setOpened] = useState(false); // profile dropdown state
  const ref = useClickOutside<HTMLDivElement>(() => setOpened(false));
  const [notificationOpened, setNotificationOpened] = useState(false); // notification dropdown state
  const Notificationref = useClickOutside<HTMLDivElement>(() =>
    setNotificationOpened(false)
  );
  const { handleTheme, user } = useContext(C) as ContextValue;
  const { following, followUser } = useContext(C) as ContextValue;
  const [count, setCount] = useState(0);

  // notifications are refetched every 15 seconds
  const { data, error } = api.notifications.getCount.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchInterval: 15000, // 15 seconds
    enabled: !!user,
  });

  const { mutate } = api.notifications.markAsRead.useMutation(); // mark all notifications as read when notification popup is opened

  useEffect(() => {
    if (opened) {
      mutate();
      setCount(0);
    }
  }, [opened]);

  useEffect(() => {
    if (error) {
      toast.error("Error Fetching Notifications State");
    }
    setCount(data || 0);
  }, [error, data]);

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        aria-label="icon"
        role="button"
        className="btn-icon hidden h-10 w-10 lg:flex"
      >
        <Search className="h-5 w-5 fill-none stroke-gray-700 dark:stroke-text-primary" />
      </button>
      <button
        aria-label="icon"
        role="button"
        className="btn-icon flex h-10 w-10"
        onClick={handleTheme}
      >
        <Sun className="h-5 w-5 fill-none stroke-gray-700 dark:stroke-text-primary" />
      </button>
      <div className="relative hidden sm:block">
        <button
          onClick={() => setNotificationOpened((prev) => !prev)}
          aria-label="icon"
          role="button"
          className="btn-icon flex h-10 w-10"
        >
          <NotificationSVG className="h-5 w-5 fill-none stroke-gray-700 dark:stroke-text-primary" />
        </button>
        {count > 0 && (
          <div className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red text-xs text-white">
            <span className="text-xs">{count}</span>
          </div>
        )}
        {notificationOpened && (
          <div
            ref={Notificationref}
            className="absolute right-0 top-full z-50 mt-2"
          >
            <Notification />
          </div>
        )}
      </div>
      <div className="hidden md:block">
        <button
          onClick={() => void followUser()}
          className="btn-outline flex w-full items-center justify-center gap-2 text-secondary md:w-max"
        >
          {following.status ? (
            <>
              <Check className="h-5 w-5 fill-secondary" />
              Following
            </>
          ) : (
            <>
              <Follow className="h-5 w-5 fill-secondary" />
              Follow User
            </>
          )}
        </button>
      </div>
      <button
        aria-label="profile"
        role="button"
        className="relative rounded-full"
      >
        <Image
          src={user?.user.profile || "/default_user.avif"}
          alt={user?.user.name || "Guest User"}
          width={100}
          height={100}
          draggable={false}
          className="h-9 w-9 overflow-hidden rounded-full"
          onClick={() => setOpened(true)}
        />
        {opened &&
          (!!user ? (
            <ArticleProfileDropdown ref={ref} />
          ) : (
            <NotAuthenticatedProfileDropdown ref={ref} />
          ))}
      </button>
    </div>
  );
};

export default ArticleRightArea;
