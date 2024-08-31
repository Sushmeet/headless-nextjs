import { getContentForLogoWall } from "@/content/queries";
import Clients from "./clients";

export const LogoWall = async () => {
  const data = await getContentForLogoWall();
  const content = data.assetCollection.items;

  return (
    <>
      <Clients content={content} />;
    </>
  );
};
