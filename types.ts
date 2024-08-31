export type LogWallQuery = {
  assetCollection: {
    items: {
      title: string;
      url: string;
      height: number;
      width: number;
    }[];
  };
};

export type HeroQuery = {
  heroCollection: {
    items: {
      preTitle: string;
      subtitle: string;
      title: string;
      callToActionsCollection: {
        items: {
          label: string;
          link: string;
        }[];
      };
    }[];
  };
};
