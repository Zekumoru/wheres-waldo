import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/store';
import { useAddHighScorePopup } from '../contexts/AddHighScorePopupContext';
import { HighScoreActions } from '../highScoreSlice';

const StyledAddHighScorePopup = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;

  &.visible {
    display: grid;
  }

  h2 {
    display: flex;
    gap: 8px;
    margin: 0;
    margin-bottom: 8px;

    .icon {
      width: 1em;
      height: 1em;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input[type='text'] {
    padding: 6px;
    font-size: 1.2rem;
  }

  button {
    text-transform: capitalize;
    font-weight: 600;
    padding: 8px 12px;
    cursor: pointer;
  }

  .dialog {
    width: 360px;
    background-color: #18191a;
    padding: 20px;
    border-radius: 4px;
  }

  .clock-icon-container {
    position: relative;
    bottom: -1.9px;
  }

  .clock-icon {
    width: 1em;
    height: 1em;
  }
`;

type AddHighScorePopupProps = {
  show: boolean;
  highScore: number;
};

const AddHighScorePopup = ({ show, highScore }: AddHighScorePopupProps) => {
  const { hide } = useAddHighScorePopup();
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      HighScoreActions.add({
        name,
        id: nanoid(),
        score: highScore,
      })
    );

    setName('');
    hide();
  };

  return (
    <StyledAddHighScorePopup className={`${show ? 'visible' : ''}`}>
      <div className="dialog">
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
            />
          </svg>
          <div>You've found them all!</div>
        </h2>
        <form
          onSubmit={(e) => {
            handleSubmit();
            e.preventDefault();
          }}
        >
          <div>
            Add your name in the leader board! Your current score is{' '}
            {highScore.toFixed(2)}{' '}
            {
              <span className="clock-icon-container">
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
              </span>
            }
            .
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button>Add high score</button>
          <button type="button" onClick={hide}>
            Nah, I'm good
          </button>
        </form>
      </div>
    </StyledAddHighScorePopup>
  );
};

export default AddHighScorePopup;
