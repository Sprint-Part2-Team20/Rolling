import { React, useEffect, useState } from 'react';

import Header from '../../components/common/Header';
import HeaderService from '../../components/common/HeaderService/HeaderService';
import Card from '../../components/common/Card/Card';
import styles from './postEditPage.module.scss';

function PostEditPage() {
  const [emojiClicked, setEmojiClicked] = useState(false);
  const [reactionsResult, setReactionsResult] = useState([]);
  const [recipientResult, setRecipientResult] = useState([]);
  const URLRecipient = 'https://rolling-api.vercel.app/2-9/recipients/2219/';
  const URLReactions =
    'https://rolling-api.vercel.app/2-9/recipients/2219/reactions/';

  useEffect(() => {
    async function reactionsFetchData() {
      try {
        const response = await fetch(URLReactions);
        const result = await response.json();
        setReactionsResult(result);
      } catch (error) {
        console.log(`${URLReactions}에 대한 fetch error : ${error}`);
      }
    }
    async function recipientFetchData() {
      try {
        const response = await fetch(URLRecipient);
        const result = await response.json();
        setRecipientResult(result);
      } catch (error) {
        console.log(`${URLReactions}에 대한 fetch error : ${error}`);
      }
    }
    reactionsFetchData();
    recipientFetchData();
  }, [emojiClicked]);
  return (
    <>
      <Header />
      {recipientResult.length !== 0 && reactionsResult.length !== 0 && (
        <HeaderService
          recipientResult={recipientResult}
          reactionsResult={reactionsResult}
          reactionsURL={URLReactions}
          emojiClicked={emojiClicked}
          setEmojiClicked={setEmojiClicked}
        />
      )}
      <div className={styles.cardContainer}>
        {recipientResult.length !== 0 &&
          recipientResult.recentMessages.map(props => (
            <div key={props.id} className={styles.card}>
              <Card props={props} />
              <button type="button">d</button>
            </div>
          ))}
      </div>
    </>
  );
}
export default PostEditPage;
