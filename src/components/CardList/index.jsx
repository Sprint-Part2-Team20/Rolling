import React from 'react';
import Card from './Card';
import useFetchData from '../../hooks/useFetchData';

const CardList = () => {
  // constant만들면 수정예정
  const url = 'https://rolling-api.vercel.app/2-1/recipients/?limit=8&offset=8';
  const recipientsData = useFetchData(url);

  // recipientsData가 유효하고 results 배열이 존재하는지 확인
  const recipients =
    recipientsData && recipientsData.results ? recipientsData.results : [];

  // 로딩 상태나 데이터가 없는 상태를 처리
  if (!recipientsData || recipients.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipient-list">
      {recipients.map(recipient => (
        <Card
          key={recipient.id}
          id={recipient.id}
          name={recipient.name}
          backgroundColor={recipient.backgroundColor}
          backgroundImageURL={recipient.backgroundImageURL}
          messageCount={recipient.messageCount}
          topReactions={recipient.topReactions}
        />
      ))}
    </div>
  );
};

export default CardList;
