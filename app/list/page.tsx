import React from "react";
import { CampaignCover } from "../components/Cover";
import Filter from "../components/Filter";

const ListPage = () => {
  return (
    <div className="container-p">
      <CampaignCover />
      <Filter />
    </div>
  );
};

export default ListPage;
