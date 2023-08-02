import { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../../store/auth/authThunks";
import { getImagesList } from "../../store/images/imagesThunks";
import Button from "../../ui/components/Button/Button";
import styles from "./styles.module.scss";

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
    <div className={styles.auth}>
      <div className={styles.auth__wrap}>
        <div className={styles.auth__content}>
          <h1 className={styles.auth__title}>Welcome to</h1>
          <h1 className={styles["auth__title--yellow"]}>Memory Game</h1>
          <h3 className={styles["auth__title--sub"]}>Get ready to challenge your memory and have some fun.</h3>
          <form onSubmit={onSubmit} className={styles.auth__form}>
            <div className={styles.auth__field}>
              <label htmlFor="username" className={styles.auth__label}>
                To begin, please enter your name
              </label>
              <input
                className={styles.auth__input}
                type="text"
                placeholder="Your name"
                name="username"
                value={formState.userName}
                onChange={onInputChange}
                required
                minLength={3}
                autoComplete="off"
              />
              {errorLogIn && (
                <p className={styles.auth__error}>
                  The name must have at least 3 characters.
                </p>
              )}
            </div>
            <div className={styles.auth__button}>
              <Button
                text="Start Game"
                type="submit"
                disabled={buttonSubmit}
                handleOnClick={() => dispatch(getImagesList())}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
