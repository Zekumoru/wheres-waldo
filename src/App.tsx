import { useState } from 'react';
import styled from 'styled-components';
import ClockTimer from './components/ClockTimer';
import { useAddHighScorePopup } from './features/high-score/contexts/AddHighScorePopupContext';
import HighScoreList from './features/high-score/HighScoreList';
import PhotoView from './features/photo-view/PhotoView';

const StyledApp = styled.div`
  padding: 16px;

  h1 {
    text-align: center;
    margin-block: 0 8px;
  }
`;

const App = () => {
  const [finished, setFinished] = useState(false);
  const { show } = useAddHighScorePopup();

  const handleFinish = () => {
    setFinished(true);
  };

  const handleTimerStop = (totalTimeInSeconds: number) => {
    show(totalTimeInSeconds);
  };

  return (
    <StyledApp className="App">
      <h1>Where's Waldo!</h1>
      <ClockTimer stop={finished} onTimerStop={handleTimerStop} />
      <PhotoView onFinish={handleFinish} />
      <HighScoreList />
    </StyledApp>
  );
};

export default App;
