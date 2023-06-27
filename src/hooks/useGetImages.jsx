import React from "react";
import { useGlobalContext } from "../Context";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const url =
  "https://api.unsplash.com/search/photos?client_id=TeT-6UNMNAENHBI_TnwhVulUVHHwMamrSyDxBvXUXJ4";

const useGetImages = () => {
  const { searchTerm } = useGlobalContext();
  return useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
};

export default useGetImages;
