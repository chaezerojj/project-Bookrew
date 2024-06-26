// 로딩페이지
import React from 'react';
import { HashLoader } from 'react-spinners';
import * as S from './Loading.Style';

function Loading() {
  return (
    <>
      <S.Wrapper>
        <HashLoader color="#fff500" />
      </S.Wrapper>
    </>
  )
}

export default Loading