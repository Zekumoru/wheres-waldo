import { useEffect, useState } from 'react';
import styled from 'styled-components';

type ClockTimerProps = {
  stop?: boolean;
  className?: string;
  onTimerStop?: (totalTimeInSeconds: number) => void;
};

const StyledClockTimer = styled.div`
  display: flex;
  gap: 4px;
  font-size: 1.8rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  .icon {
    width: 1em;
    height: 1em;
  }
`;

const ClockTimer = ({ className, onTimerStop, stop }: ClockTimerProps) => {
  const [startTime] = useState(Date.now());
  const [timer, setTimer] = useState<NodeJS.Timer | undefined>();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (stop) return;

    const interval = setInterval(() => {
      const timeInSeconds = (Date.now() - startTime) / 1000;
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds =
        timeInSeconds > 60 ? timeInSeconds % (minutes * 60) : timeInSeconds;

      setMinutes(minutes);
      setSeconds(seconds);
    }, 100);

    setTimer(interval);
    return () => clearInterval(interval);
  }, [stop]);

  useEffect(() => {
    if (!stop) return;

    clearInterval(timer);
    onTimerStop?.(minutes * 60 + seconds);
  }, [stop]);

  return (
    <StyledClockTimer className={className ?? ''}>
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>{`${minutes < 10 ? '0' : ''}${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds.toFixed(2)}`}</div>
    </StyledClockTimer>
  );
};

export default ClockTimer;
