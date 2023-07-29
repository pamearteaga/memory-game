import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImagesList } from "../../store/images/imagesThunks";

const GamePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImagesList());
  }, [dispatch]);

  const { userName } = useSelector((state) => state.auth);
  const { images } = useSelector((state) => state.images);
  console.log(images);

  return (
    <div>
      <p>Hello {userName}!</p>
      <div className="flex justify-between flex-wrap">
        {images.map((image, i) => (
          <div key={i} className="w-3/12 h-96 overflow-hidden">
            <img
              className="object-contain"
              src={image.fields.image.url}
              alt={image.meta.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
