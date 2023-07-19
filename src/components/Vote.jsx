import React from "react";
import VoteFooter from "./VoteFooter";
import VoteMain from "./VoteMain";

const Vote = () => {
  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">React是很棒的前端框架</h2>
        <span className="num">0</span>
      </div>
      <VoteMain />
      <VoteFooter />
    </div>
  );
};

export default Vote;
