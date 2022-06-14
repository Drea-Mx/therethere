import React from "react";
import styled from "styled-components";
import OneColumn from "./OneColumn";
import ThreeColumn from "./ThreeColumn";
import TwoColumn from "./TwoColumn";

const modulesArr = [
  { name: "oneColumn", comp: OneColumn },
  { name: "twoColumn", comp: TwoColumn },
  { name: "threeColumn", comp: ThreeColumn },
];

const ArchitectureModules = ({ architectureModule, props }) => {
  let final_arr = [];

  architectureModule.forEach((arMod) => {
    modulesArr.forEach((mMod) => {
      if (arMod["_type"] === mMod.name) {
        final_arr.push({ ...arMod, ...mMod });
      }
    });
  });

  return (
    <ArchitectureModulesWrapper>
      {final_arr.map((ArchModule, i) => (
        <ArchModule.comp key={i} data={{ ...ArchModule }} props={props} />
      ))}
    </ArchitectureModulesWrapper>
  );
};

const ArchitectureModulesWrapper = styled.div`
  margin-top: 400px;
  @media (max-width: 850px) {
    margin-top: 50px;
  }
`;

export default ArchitectureModules;