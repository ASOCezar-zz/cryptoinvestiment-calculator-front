import { useEffect } from 'react';

export const useSentinel = (
  sentinel: React.MutableRefObject<HTMLDivElement>,
  setHasShown: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setHasShown(true);
      }
    });

    if (sentinel.current !== null) {
      intersectionObserver.observe(sentinel.current);
    }

    return () => {
      intersectionObserver.disconnect();
      setHasShown(false);
    };
    //eslint-disable-next-line
  }, [sentinel]);
};
