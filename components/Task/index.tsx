import React from "react";
import * as S from "./styles";

interface Props {
  taskTitle: string;
}

export const Task = ({ taskTitle }: Props) => {
  return (
    <S.Item>
      <S.ItemLeft>
        <S.Square></S.Square>
        <S.TaskTitle>{taskTitle}</S.TaskTitle>
      </S.ItemLeft>
      <S.Circle></S.Circle>
    </S.Item>
  );
};
