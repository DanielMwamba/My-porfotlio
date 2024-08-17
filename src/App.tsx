import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate asynchronous initialization (e.g., fetching data)
    const initializeApp = async () => {
      try {
        // Set loading to true before initializationsetIsLoading(true);
        // Simulate initialization processawaitnewPromise((resolve) =>setTimeout(resolve, 1000));
        // Set loading to false after initialization
      } catch (error) {
        console.error("Error initializing app:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <div className="min-h-screen text-base bg-white overscroll-contain dark:bg-slate-900 dark:text-slate-300 md:text-xl">
      {isLoading ? (
        <p>chargement</p>
      ) : (
        <>
          {" "}
          <Navbar />
          <Main />{" "}
        </>
      )}
    </div>
  );
};

export default App;
