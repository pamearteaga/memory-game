import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImagesList } from "../../store/images/imagesThunks";
import Spinner from "../../ui/components/Spinner/Spinner";

const GamePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImagesList());
  }, [dispatch]);

  const { userName } = useSelector((state) => state.auth);
  const { images } = useSelector((state) => state.images);

  //shuffle images order
  const shuffle = (arr) => {
    const newArr = [...arr];
    return newArr.sort(() => Math.random() - 0.5);
  };

  //duplicates the images and returns a new list
  const shuffleImages = (list) => {
    const newList = shuffle(list).slice(0, 6);
    const duplicates = [...newList, ...newList];

    return shuffle(duplicates);
  };

  return (
    <div>
      <p>Hello {userName}!</p>
      <div className="flex justify-between flex-wrap">
        {images.length === 0 ? (
          <Spinner />
        ) : (
          <>
            {shuffleImages(images).map((image, i) => (
              <div key={i} className="w-3/12 h-96 overflow-hidden">
                <img
                  className="object-contain"
                  src={image.fields.image.url}
                  alt={image.meta.name}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default GamePage;
