import React from "react";
import styled from "styled-components/native";
import Votes from "./Votes";
import Poster from "./Poster";

const Movie = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

export const HListSeparator = styled.View`
  width: 20px;
`;

interface VMediaProps {
  posterPath: string;
  originalTitle: string;
  voteAverage: number;
}

const VMedia: React.FC<VMediaProps> = ({
  posterPath,
  originalTitle,
  voteAverage,
}) => (
  <Movie>
    <Poster path={posterPath} />
    <Title>
      {originalTitle?.slice(0, 12)}
      {originalTitle?.length > 12 ? "..." : null}
    </Title>
    <Votes votes={voteAverage} />
  </Movie>
);

export default VMedia;
