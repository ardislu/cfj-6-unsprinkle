import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <source 
            type="image/avif"
            srcset={`
              ${src}.avif 1x,
              ${src}@2x.avif 2x,
              ${src}@3x.avif 3x
            `} />
          <source 
            type="image/jpeg"
            srcset={`
              ${src}.jpg 1x,
              ${src}@2x.jpg 2x,
              ${src}@3x.jpg 3x
            `} />
          <img src={`${src}.jpg`} alt={alt} />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture`
  & img {
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-bottom: 8px; 
    object-fit: cover;
  }
`;

const Tags = styled.ul`
  padding-block: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  
  &:not(:last-child) {
    margin-inline-end: 8px;
  }
`;

export default PhotoGridItem;
