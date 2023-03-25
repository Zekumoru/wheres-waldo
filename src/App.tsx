import { useState } from 'react';
import PhotoView from './features/photo-view/PhotoView';

const App = () => {
  const [startTime, setStartTime] = useState(Date.now());

  const handleFinish = () => {
    const endTime = Date.now();
    const totalTimeInSeconds = (endTime - startTime) / 1000;

    console.log('It took you:', totalTimeInSeconds, 'seconds!');
  };

  return (
    <div className="App">
      <PhotoView onFinish={handleFinish} />
    </div>
  );
};

export default App;
