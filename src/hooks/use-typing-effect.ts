import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  text: string;
  duration?: number;
  delay?: number;
  onComplete?: () => void;
}

export const useTypingEffect = ({
  text,
  duration = 50,
  delay = 0,
  onComplete,
}: UseTypingEffectOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, duration);

        return () => clearTimeout(timeout);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, duration, delay, isComplete, onComplete]);

  return { displayedText, isComplete };
};