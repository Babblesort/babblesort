import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import './babblesort-image.scss';

const BabblesortImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "VitruvianLegoManAvatar.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Link to="/log/1">
      <Img
        className="babblesort-image"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </Link>
  );
};

export default BabblesortImage;
