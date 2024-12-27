import { createClient, type QueryParams } from "next-sanity";
import { SanityDocument } from "next-sanity";

import ENV from "../../env";

export interface SanityFetchParams {
  query: string;
  params?: QueryParams;
}

export interface SanityFetchResponse {
  isError: boolean;
  data: SanityDocument[] | null;
  error?: unknown;
}

export const client = createClient({
  projectId: ENV.SANITY.PROJECT_ID,
  dataset: ENV.SANITY.DATASET,
  useCdn: true,
});

const sanityFetch = async ({
  query,
  params,
}: SanityFetchParams): Promise<SanityFetchResponse> => {
  try {
    const data = await client.fetch(query, params);
    return { isError: false, data };
  } catch (error) {
    console.log(error);
    return { isError: true, data: null, error };
  }
};

export default sanityFetch;
