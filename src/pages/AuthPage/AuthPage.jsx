import { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../../store/auth/authThunks";
import { getImagesList } from "../../store/images/imagesThunks";
import Button from "../../ui/components/Button/Button";

const AuthPage = () => {
  const dispatch = useDispatch();

  const initialForm = { status: "not-authenticated", userName: "" };
  const [formState, setFormState] = useState(initialForm);
  const [buttonSubmit, disabledButtonSubmit] = useState(false);
  const [errorLogIn, showErrorLogIn] = useState(false);

  const onInputChange = (e) => {
    const inputValue = e.target.value.trim();
    setFormState({
      ...formState,
      userName: inputValue,
    });
    if (inputValue.length < 3) {
      disabledButtonSubmit(true);
      showErrorLogIn(true);
    } else {
      disabledButtonSubmit(false);
      showErrorLogIn(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authUser({
        ...formState,
        status: "authenticated",
      })
    );
  };

  return (
    <div>
      <p>
        Welcome to the Memory Game! Get ready to challenge your memory and have
        some fun.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col max-w-md mt-5 ml-5">
        <label htmlFor="username">To begin, please enter your name here</label>
        <input
          type="text"
          placeholder="Your name"
          name="username"
          value={formState.userName}
          onChange={onInputChange}
          required
          minLength={3}
          autoComplete="off"
        />
        {errorLogIn && <p>The name must have at least 3 characters.</p>}
        <Button
          text="Start Game"
          type="submit"
          disabled={buttonSubmit}
          handleOnClick={() => dispatch(getImagesList())}
        />
      </form>
    </div>
  );
};

export default AuthPage;
