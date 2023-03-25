import { createContext, ReactNode, useContext, useState } from 'react';
import AddHighScorePopup from '../components/AddHighScorePopup';

type Methods = {
  show: (highScore: number) => void;
  hide: () => void;
};

const AddHighScorePopupContext = createContext<Methods>({
  show: () => {},
  hide: () => {},
});

const useAddHighScorePopup = () => useContext(AddHighScorePopupContext);

const AddHighScorePopupProvider = ({ children }: { children: ReactNode }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const show = (highScore: number) => {
    setHighScore(highScore);
    setIsShowing(true);
  };

  const hide = () => {
    setIsShowing(false);
  };

  return (
    <AddHighScorePopupContext.Provider value={{ show, hide }}>
      <AddHighScorePopup highScore={highScore} show={isShowing} />
      {children}
    </AddHighScorePopupContext.Provider>
  );
};

export default AddHighScorePopupProvider;
export { useAddHighScorePopup };
