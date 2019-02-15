import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HomePage = () => (
    <StaticQuery
        query={graphql`
      query HomePage {
        contentfulHomePage {
          title
        }
      }
    `}
        render={({
                     contentfulHomePage: {
                         title
                     }
                 }) => (
            <>
                <h1>{title}</h1>
            </>
        )}
    />
);

export default HomePage;