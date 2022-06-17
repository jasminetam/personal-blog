import React, {useRef, useState} from "react";

const IntersectionObserver = (props) => {
    const [show, setShow] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setShow(entry.isIntersecting);
            });
        });

        const { current } = domRef;
        observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <div
            className={`fade-in-section fade-in-type${props.type} fade-in-${
                props.direction
            } ${show ? "show" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default IntersectionObserver;
