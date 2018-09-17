import React, { Component } from "react";
import JumbotronX2 from "../components/JumbotronX2";

export default ({ data }) => {
  console.log(`MD Files:`);
  console.log(data);
  return (
    <div>
      <JumbotronX2 />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: "1.45rem"
        }}>
        <h1>Markdown Files</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Word Count</th>
              <th>Time to Read</th>
            </tr>
          </thead>
          <tbody>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.title}</td>
                <td>{node.frontmatter.date}</td>
                <td>{node.wordCount.words}</td>
                <td>{node.timeToRead}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title} <span>- {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          wordCount {
            words
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;
