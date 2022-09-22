import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  //If language property is null
  const languageCount = repos.filter((repo) => repo.language !== null);

  //Empty object
  const objectChartData = {};

  //Counting language occurrences logic
  for (const elemet of languageCount) {
    const { language } = elemet;
    if (objectChartData[language]) {
      objectChartData[language] += 1;
    } else {
      objectChartData[language] = 1;
    }
  }

  //Converting object to an array of objects
  const chartData = Object.entries(objectChartData)
    .map((item) => {
      return { label: item[0], value: item[1] };
    })
    //Render 5 most used languages
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={chartData} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
