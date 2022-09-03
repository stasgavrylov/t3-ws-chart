import { useEffect, useRef } from 'react';
import classnames from 'classnames';

const FPSMeter = () => {
  const fpsMeterRef = useRef<HTMLSpanElement>(null!);

  useEffect(() => {
    // Approximate calculation of how many frames are rendered every second
    // with the help of requestAnimationFrame API.

    let startTime = Date.now();
    let frames = 0;

    function getFrame() {
      const endTime = Date.now();
      frames++;
      if (endTime - startTime > 1000) {
        const fps = (frames / ((endTime - startTime) / 1000)).toFixed(1);
        fpsMeterRef.current.textContent = `${fps} FPS`;
        startTime = endTime;
        frames = 0;
      }
      requestAnimationFrame(getFrame);
    }
    getFrame();
  }, []);

  return (
    <p className='text-lg leading-normal font-bold text-gray-700'>
      {'Running at '}
      <span ref={fpsMeterRef}>...</span>
    </p>
  );
};

export default FPSMeter;
