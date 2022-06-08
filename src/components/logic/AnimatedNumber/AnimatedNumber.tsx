import React from 'react';

interface Props {
  number: number;
  duration?: number;
  format?: (v: number) => string;
}

export const AnimatedNumber: React.FC<Props> = ({ number = 0, duration = 500, format = (v) => `${v}` }) => {
  const [animatedValue, setAnimatedValue] = React.useState(0);
  const [animationOptions, setAnimationOptions] = React.useState({ duration, toNumber: 0, startTime: +new Date() });

  React.useEffect(() => {
    setAnimationOptions({ duration, toNumber: number, startTime: +new Date() });
  }, [duration, number]);

  React.useEffect(() => {
    if (animatedValue === animationOptions.toNumber) {
      return;
    }

    const startTime: number = animationOptions.startTime;
    const endTime: number = startTime + animationOptions.duration;
    const now = +new Date();
    const endNumber = animationOptions.toNumber;
    const timeRange = endTime - now;
    const nums = (timeRange / 1000) * 30 - 2;
    const remaining = endNumber - animatedValue;
    const inc = nums > 0 ? remaining / nums : remaining;
    let nextNumber = animatedValue + inc;

    if (endTime - now < 50) {
      nextNumber = endNumber;
    }

    const t = requestAnimationFrame(() => {
      setAnimatedValue(nextNumber);
    });

    return () => cancelAnimationFrame(t);
  }, [animationOptions, animatedValue]);

  return <span>{format(animatedValue)}</span>;
};
