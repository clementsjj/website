import React from "react";
import Link from "gatsby-link";
import JumbotronX2 from "../components/JumbotronX2";

const style = {
  textDecoration: "none",
  color: "black"
};

export default ({ data }) => {
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
        <h1>Blog</h1>
        <hr />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <hr style={{ width: "20%" }} />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link
            to={node.fields.slug}
            style={{ textDecoration: "none", color: "inherit" }}>
            <h3>{node.frontmatter.title}</h3>
            <p>
              <span>
                <em>- {node.frontmatter.date}</em>
              </span>
            </p>
            <p>{node.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
