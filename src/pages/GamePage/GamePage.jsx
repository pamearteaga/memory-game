import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { shuffle } from "../../helpers/shuffle";
import CardsGrid from "../../ui/components/CardsGrid/CardsGrid";
import Scores from "../../ui/components/Scores/Scores";
import Button from "../../ui/components/Button/Button";
import styles from "./styles.module.scss";
import IconArrow from "../../ui/assets/icons/IconArrow";

const GamePage = () => {
  //get user name
  const { userName } = useSelector((state) => state.auth);
  //get images list
  const { images } = useSelector((state) => state.images);

  const [cardList, setCardList] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [scores, setScores] = useState({ right: 0, wrong: 0 });

  //handle image data before using it
  const cardImageslist = (list) => {
    /* shuffle the list and slice the first six images 
    to get different images every time a game is started */
    const shortList = shuffle(list).slice(0, 6);
    //duplicates the images
    const duplicatedImages = [...shortList, ...shortList];
    /* create a new list with only the required properties and 
    shuffle again to make sure the cards are evenly distributed */
    const newImages = shuffle(duplicatedImages).map((img, i) => {
      let imgProperties = {
        open: false,
        id: `${img.fields.image.uuid}-${i}`,
        imgId: img.fields.image.uuid,
        title: img.fields.image.title,
        url: img.fields.image.url,
      };
      return imgProperties;
    });
    setCardList(newImages);
  };

  useEffect(() => {
    cardImageslist(images);
  }, [images]);

  //show image when card is clicked
  const openCard = (id) => {
    //looks for the card ppr id in the list and opens it
    const openImage = cardList.map((img) => {
      if (img.id === id) {
        selectedCards.length < 2 &&
          setSelectedCards([
            ...selectedCards,
            { id: img.id, imgId: img.imgId },
          ]);
        return { ...img, open: true };
      } else {
        return img;
      }
    });
    setCardList(openImage);
  };

  //compare every time a card is selected
  const checkSelectedCard = (imgId) => {
    if (selectedCards.length === 1) {
      // check if there ir a card with same imgId
      const card = selectedCards.find((item) => item.imgId === imgId);
      if (card) {
        setScores({ ...scores, right: scores.right + 1 });
        setSelectedCards([]);
      } else {
        setScores({ ...scores, wrong: scores.wrong + 1 });
        const checkCard = cardList.map((img) => {
          if (img.id === selectedCards[0].id) {
            return { ...img, open: false };
          } else {
            return img;
          }
        });
        /* this is to give the wrong card a second to 
        show itself before closing it again and
        prevent more cards from being selected */
        setTimeout(() => {
          setCardList(checkCard);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const newGame = () => {
    cardImageslist(images);
    setSelectedCards([])
    setScores({ right: 0, wrong: 0 })
  }

  return (
    <div className={styles.game}>
      <div className={styles.game__head}>
        <h1 className={styles.game__title}>Memory Game</h1>
        <h3 className={styles.game__username}>
          Player: <span className={styles.game__name}>{userName}</span>
        </h3>
      </div>
      <div className={styles.game__top}>
        <Scores {...scores} />
        {scores.right < 6 && (
          <Button text={<><IconArrow /> Restart</>} handleOnClick={() => newGame()} />
        )}
      </div>
      <CardsGrid
        imagesList={cardList}
        userName={userName}
        score={scores.right}
        disabledFunc={selectedCards.length === 2 ? false : true}
        handleOnClick={(id, imgId) => {
          openCard(id);
          checkSelectedCard(imgId);
        }}
        newGame={newGame}
      />
    </div>
  );
};

export default GamePage;
