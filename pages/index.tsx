import * as React from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [authInitialised, setAuthInitialised] = React.useState(false);
  const [loggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const userId = window.localStorage.getItem("userId");

    setTimeout(() => {
      setAuthInitialised(true);
      setIsLoggedIn(Boolean(userId));
    }, 5000);
  }, []);

  if (!authInitialised) {
    return (
      <div className="flex min-h-screen items-center justify-center py-2 gap-8">
        <div>Checking authentication status</div>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center py-2 gap-8">
        <div className="p-8 border rounded-lg w-[15rem] text-center">
          Authenticated
        </div>
        <div className="p-8 border-2 rounded-lg w-[15rem] text-center border-red-500">
          Not authenticated
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center py-2 gap-8">
      <div className="p-8 border-2 rounded-lg w-[15rem] text-center border-green-500">
        Authenticated
      </div>
      <div className="p-8 border rounded-lg w-[15rem] text-center">
        Not authenticated
      </div>
    </div>
  );
};

export default Home;
