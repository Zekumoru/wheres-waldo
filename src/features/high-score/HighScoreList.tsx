import styled from 'styled-components';
import { useAppSelector } from '../../app/store';

const StyledHighScoreList = styled.div`
  width: 280px;
  margin: 0 auto;

  h2 {
    margin-block: 16px 8px;
    text-align: center;
  }

  p {
    text-align: center;
  }

  ul {
    text-align: center;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  li {
    display: flex;
    gap: 4px;
    justify-content: space-between;
  }

  .score-container {
    display: flex;
    gap: 4px;
  }

  .clock-icon {
    width: 1em;
    height: 1em;
  }
`;

const HighScoreList = () => {
  const highScores = useAppSelector(
    (state) => state.highScoreReducer.highScores
  );

  return (
    <StyledHighScoreList>
      <h2>High Scores</h2>
      {highScores.length === 0 ? (
        <p>No scores yet! Be the one to have their name here!</p>
      ) : (
        <ul>
          {highScores.map(({ id, name, score }) => (
            <li key={id}>
              <div>{name}</div>
              <div className="score-container">
                <div>{score.toFixed(2)}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="clock-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      )}
    </StyledHighScoreList>
  );
};

export default HighScoreList;
