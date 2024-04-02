import { useState } from "react";

export const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        r;
        setWidth(window.innerWidth);
    });

    return { width };
};