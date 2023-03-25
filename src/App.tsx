import { useState } from 'react';
import styled from 'styled-components';
import ClockTimer from './components/ClockTimer';
import PhotoView from './features/photo-view/PhotoView';

const StyledApp = styled.div`
  h1 {
    text-align: center;
    margin-block: 16px 8px;
  }
`;

const App = () => {
  const [finished, setFinished] = useState(false);

  const handleFinish = () => {
    setFinished(true);
  };

  return (
    <StyledApp className="App">
      <h1>Where's Waldo!</h1>
      <ClockTimer
        stop={finished}
        onTimerStop={(totalTimeInSeconds) => {
          console.log('You finished in', totalTimeInSeconds, 'seconds');
        }}
      />
      <PhotoView onFinish={handleFinish} />
    </StyledApp>
  );
};

export default App;
