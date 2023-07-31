import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shuffle } from "../../helpers/duplicatedImages";
import CardsGrid from "../../ui/components/CardsGrid/CardsGrid";
import Scores from "../../ui/components/Scores/Scores";

const GamePage = () => {
  //get user name
  const { userName } = useSelector((state) => state.auth);
  //get images list
  const { images } = useSelector((state) => state.images);

  const [cardList, setCardList] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [scores, setScores] = useState({ hits: 0, misses: 0 });

  //handle image data before iterating
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

  //compare every time that 2 cards are selected
  const checkSelectedCard = (imgId) => {
    if (selectedCards.length === 1) {
      const card = selectedCards.find((item) => item.imgId === imgId);
      if (card) {
        setScores({ ...scores, hits: scores.hits + 1 });
      } else {
        setScores({ ...scores, misses: scores.misses + 1 });
        const checkCard = cardList.map((img) => {
          if (img.id === selectedCards[0].id) {
            return { ...img, open: false };
          } else {
            return img;
          }
        });
        setCardList(checkCard);
      }
      setSelectedCards([]);
    }
  };

  //show image when card is clicked
  const openCard = (id) => {
    const openImage = cardList.map((img) => {
      if (img.id === id && img.open === false) {
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

  return (
    <div className="h-screen">
      <p>Hello {userName}!</p>
      <div className="flex flex-row">
        <Scores {...scores} />
      </div>
      <CardsGrid
        imagesList={cardList}
        userName={userName}
        score={scores.hits}
        handleOnClick={(id, imgId) => {
          openCard(id);
          checkSelectedCard(imgId);
        }}
      />
    </div>
  );
};

export default GamePage;
