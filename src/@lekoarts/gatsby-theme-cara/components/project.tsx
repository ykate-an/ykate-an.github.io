import * as React from "react";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
import { ko, en } from "../../../locale/index.mjs";
import { Themed } from "@theme-ui/mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import TestMDX from "../sections/test.mdx";

const Project = ({
  offset,
  factor = 1,
  pages,
  contentData,
}: {
  offset: number;
  factor?: number;
  pages: number;
  contentData: Object;
}) => {
  return (
    <div>
      <Divider
        bg="divider"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={offset}
        factor={factor}
      />
      <Divider speed={0.1} offset={offset} factor={pages - 1}>
        <UpDown>
          <Svg
            icon="box"
            hiddenMobile
            width={6}
            color="icon_blue"
            left="50%"
            top="75%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="70%"
            top="20%"
          />
          <Svg
            icon="triangle"
            width={8}
            stroke
            color="icon_darkest"
            left="25%"
            top="5%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={24}
            color="icon_orange"
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <Svg
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_purple"
            left="5%"
            top="80%"
          />
          <Svg
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="95%"
            top="50%"
          />
          <Svg
            icon="circle"
            hiddenMobile
            width={6}
            color="icon_brightest"
            left="85%"
            top="15%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <Svg
          icon="circle"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="4%"
          top="20%"
        />
        <Svg
          icon="circle"
          width={12}
          color="icon_darkest"
          left="70%"
          top="60%"
        />
        <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
        <Svg
          icon="hexa"
          width={8}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content
        speed={0.4}
        offset={offset}
        factor={factor}
        justifyContent="start"
      >
        <Inner>
          <ProjectContent contentData={contentData} />
          {/* <TestMDX
        contentData={contentData}
        year={2022}
        components={{
          Planet() {
            return <span style={{ color: "tomato" }}>Pluto</span>;
          },
        }}
      /> */}

          {/* <Themed.h1>test Theme</Themed.h1> */}
        </Inner>
      </Content>
    </div>
  );
};

const ProjectContent = ({ contentData }: { contentData: Object }) => {
  console.log(contentData, 111, "contentData");
  const {
    title,
    where,
    period,
    description,
    role,
    details,
    appendix,
    outcome = undefined,
  } = contentData;
  return (
    <>
      <Themed.h1>{en[`${title}`]}</Themed.h1>
      <Themed.h5>{en[`${where}`]}</Themed.h5>
      <Themed.h5>{en[`${period}`]}</Themed.h5>
      <Themed.h5>{en[`${description}`]}</Themed.h5>
      <Themed.h5>{en[`${role}`]}</Themed.h5>

      {outcome && <Themed.h5>{en[`${outcome}`]}</Themed.h5>}
   

      {details.map((detail, i) => {
                  return (
                    <Themed.ul>
                    <Themed.li key={i}> {en[`${detail}`]}</Themed.li> 
                    </Themed.ul>
                  )
                })}

        {appendix.map((img, i) => {
                  return (
                    <img
                      src={require(`../../../assets/${img}`).default}
                      key={i}
                      alt="img"
                    />
                  );
                })} 
   
    </>
  );
};

export default Project;
