export const contentGQLFetcher = async <T>({
  query,
  variables = {},
  preview = false,
}: {
  query: string;
  variables?: any;
  preview?: boolean;
}): Promise<T | undefined> => {
  const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  // Replace with your Contentful API endpoint

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: preview
          ? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
          : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.log("errors--- from graphql fetch", errors);
    }

    return data as T; // I would say don't await the resposne just return it since it's an async function.
  } catch (error) {
    console.error("Error: from Post Request itself", error);
    throw new Error("Could not get Content");
  }
};
