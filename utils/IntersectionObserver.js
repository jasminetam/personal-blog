import React from 'react';

const SetIntersectionObserver = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef();

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });
  };
  const options = {
    root: null,
    rootMargin: '0px',
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [domRef]);


  return (
    <div
      className={`fade-in-section fade-in-type${props.type} fade-in-${
        props.direction
      } ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default SetIntersectionObserver;
