"use client";

import React, { useEffect, useState } from "react";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });

      if (!res.ok) setError(true);

      const result = await res.json();

      setData(result);
      setIsLoading(false);
    };

    getData();
  }, []);

  console.log(data);

  return isLoading ? (
    <div className="">Loading...</div>
  ) : (
    <div className="">Dashboard</div>
  );
};

export default Dashboard;
