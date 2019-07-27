import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import './babblesort-image.scss';
import { useSiteMetadata } from '../queries/useSiteMetadata';

const BabblesortImage = () => {
  const { defaultPage } = useSiteMetadata();
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
    <Link to={defaultPage}>
      <Img
        className="babblesort-image"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </Link>
  );
};

export default BabblesortImage;
