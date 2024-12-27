import { useState, useEffect, createContext, ReactNode } from "react";
import { SanityDocument } from "next-sanity";

import sanityFetch, { SanityFetchResponse } from "../../sanity/client";

type PortfolioProviderType = {
  children: ReactNode;
};

const GET_PORTFOLIO = `
  *[_type == 'portfolio'] {
    ...,
    layout -> {
      ...,
    }
  }
`.trim();

export const PortfolioContext = createContext({
  isLoading: true,
  isError: false,
  data: {} as SanityDocument[] | undefined,
});

const PortfolioProvider = ({ children }: PortfolioProviderType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState<SanityDocument[]>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const sanityData: SanityFetchResponse = await sanityFetch({
        query: GET_PORTFOLIO,
      });

      if (sanityData.data) setPortfolioData(sanityData.data);
      if (sanityData.isError) setIsError(true);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const contextValue = {
    isLoading,
    isError,
    data: portfolioData,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
