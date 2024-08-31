import { HeroQuery, LogWallQuery } from "@/types";
import { contentGQLFetcher } from "./fetch";

export const getContentForLogoWall = async () => {
  const query = `#graphql
    query AssetCollection($where: AssetFilter) {
        assetCollection(where: $where) {
          items {
            title
            url
            height
            width
          }
        }
      }`;

  const data = await contentGQLFetcher<LogWallQuery>({
    query,
    variables: {
      where: {
        title_contains: "client",
      },
    },
  });

  if (!data) {
    throw new Error("oops error from getContentForLogoWall");
  }

  return data;
};

export const getContentForHero = async () => {
  const query = `#graphql 
  query HeroCollection {
    heroCollection {
      items {
        preTitle
        subtitle
        title
        callToActionsCollection {
          items {
            label
            link
          }
        }
      }
    }
  }`;

  const data = await contentGQLFetcher<HeroQuery>({ query });

  if (!data) {
    throw new Error("oops error has occured");
  }
  return data;
};
