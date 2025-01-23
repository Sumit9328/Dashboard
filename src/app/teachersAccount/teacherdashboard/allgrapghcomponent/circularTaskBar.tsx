import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularTaskBar = ({ percentage, progress, total }: { percentage: number; progress: number; total: number }) => {
  return (
    <div style={{ width: 130, height: 130, position: 'relative', top: '20px', left: '55px' }}>
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          textColor: '#000',
          pathColor: '#FFA07A',
          trailColor: '#d6d6d6',
          textSize: '14px',
          // Removed trailWidth, as it was causing the issue
        })}
        strokeWidth={6} // Explicitly set the stroke width
      />
      {/* Comment: The following div centers the progress value inside the circular bar */}
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -40%)', // Adjusted transform to move the text slightly lower
          fontSize: '20px',
        }}
      >
        {`${progress}/${total}`}
      </div>
      <div
        className='col-12'
        style={{
          position: 'absolute',
          top: '46%',
          left: '65%',
          transform: 'translate(-50%, -50%)',
          fontSize: '10px',
          color: '#7C7C7C',
        }}
      >
        Lesson Progressed
      </div>
    </div>
  );
};

export default CircularTaskBar;
