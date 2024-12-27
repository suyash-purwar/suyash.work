import { useEffect, useState } from "react";

import sanityFetch, { SanityFetchResponse } from "../sanity/client";

const GET_PORTFOLIO = `
  *[_type == 'portfolio'] {
    ...,
    layout -> {
      ...,
    }
  }
`.trim();

const usePortfolioData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState<SanityFetchResponse>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const sanityData: SanityFetchResponse = await sanityFetch({
        query: GET_PORTFOLIO,
      });

      if (sanityData.data) setPortfolioData(sanityData);
      if (sanityData.isError) setIsError(true);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { portfolioData, isLoading, isError };
};

export default usePortfolioData;
