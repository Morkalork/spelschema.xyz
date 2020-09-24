import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Link = styled.a`
  text-decoration: none;
  color: #333;
`;

const Wrapper = styled.div`
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px dashed #333;
`;
const Title = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.p`
  margin-left: 1rem;
  font-size: 0.85rem;
`;

const Date = styled.p`
  font-size: 0.85rem;
  white-space: nowrap;
`;

const TitleText = styled.p`
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MAX_DESCRIPTION_LENGTH = 120;

export const PodItem = ({ pod }) => {
  const [showAll, setShowAll] = useState(false);
  const isLongText =
    !showAll && pod.description.length > MAX_DESCRIPTION_LENGTH;

  const description = !isLongText
    ? pod.description
    : `${pod.description.substring(0, MAX_DESCRIPTION_LENGTH).trim()}...`;
  const toggleShowAll = () => setShowAll(!showAll);
  return (
    <Wrapper>
      <Link href={pod.link} target="_blank">
        <Title>
          <TitleText title={`${pod.podName} - ${pod.title}`}>
            <strong>{pod.podName}</strong> - {pod.title}
          </TitleText>
          <Date>{moment(pod.date).format('YYYY-MM-DD')}</Date>
        </Title>
      </Link>
      <Description title={pod.description} onClick={toggleShowAll}>
        <em>{description}</em>
      </Description>
    </Wrapper>
  );
};
