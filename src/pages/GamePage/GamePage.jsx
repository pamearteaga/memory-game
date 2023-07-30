import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImagesList } from "../../store/images/imagesThunks";
import Spinner from "../../ui/components/Spinner/Spinner";
import Card from "../../ui/components/Card/Card";
import { shuffledImages } from "../../helpers/shuffleImages";

const GamePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImagesList());
  }, [dispatch]);

  const { userName } = useSelector((state) => state.auth);
  const { images } = useSelector((state) => state.images);

  const [cardList, setCardList] = useState([]);

  //list with the properties needed for the game
  const cardImageslist = (list) => {
    const newImages = shuffledImages(list).map((img, i) => {
      let imgProperties = {
        open: false,
        id: `${img.fields.image.uuid}-${i}`,
        imgId: img.fields.image.uuid,
        title: img.fields.image.title,
        url: img.fields.image.url,
      };
      return imgProperties;
    });
    setCardList(newImages)
  };

  useEffect(() => {
    cardImageslist(images)
  }, [images]);


  //show image when card is clicked
  const openCard = (id) => {
    const openImage = cardList.map(img => {
      if (img.id === id) {
        return { ...img, open: true };
      } else {
        return img;
      }
    })
    setCardList(openImage)
  }
  //console.log(cardList);

  return (
    <div className="h-screen">
      <p>Hello {userName}!</p>
      <div className="block mx-auto w-full max-w-5xl">
        <div className="grid gap-4 grid-cols-4 grid-rows-3">
          {cardList.length === 0 ? (
            <Spinner />
          ) : (
            <>
              {cardList.map((image) => (
                <Card
                  key={image.id}
                  {...image}
                  handleOnClick={() => openCard(image.id)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
