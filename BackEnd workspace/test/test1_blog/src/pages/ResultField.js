import React from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { useResults } from '../util/util';

const ResultField = ({ inputValue, setInputValue }) => {
  const queryClient = useQueryClient();

  const { status, data, error } = useResults(inputValue);

  const onHandleList = name => {
    setInputValue(name);
  };

  const getDataByStatus = () => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <ul>
            <ResultHeader>추천 검색어</ResultHeader>
            {data?.map(item => {
              return (
                <SearchedItem
                  key={item.id}
                  value={item.name}
                  onClick={() => onHandleList(item.name)}
                >
                  {item.name}
                </SearchedItem>
              );
            })}
          </ul>
        );
    }
  };

  return data ? <Wrapper>{getDataByStatus()}</Wrapper> : null;
};

export default ResultField;