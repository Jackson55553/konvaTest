import React, { useEffect, useState } from "react";
import "./ShapesList.css";
import RectangleLogo from "../../../../shapeLogos/RectangleLogo";
import CircleLogo from "../../../../shapeLogos/CircleLogo";
import TriangleLogo from "../../../../shapeLogos/TriangleLogo";

const shapeLogos = [RectangleLogo(), CircleLogo(), TriangleLogo()];

export default function ShapesList() {
    useEffect(() => {
        console.log("useEffect");
        return () => {};
    }, []);

    type ClickedCortege = [Boolean, Boolean, Boolean];

    const [clicked, setClicked] = useState<ClickedCortege>([
        false,
        false,
        false,
    ]);

    const onclick = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
        const test: ClickedCortege = [false, false, false];
        if (clicked[i] == true) {
            setClicked(test);
            return;
        }
        test[i] = true;
        setClicked(test);
    };

    return (
        <div className="shape_list">
            {shapeLogos.map((el, i) => (
                <div
                    key={`shapeLogo${Math.floor(Math.random() * 10000)}`}
                    className={`list_el ${
                        clicked[i] == false ? "" : "list_el_clicked"
                    }`}
                    onClick={(e) => onclick(e, i)}
                >
                    {el}
                </div>
            ))}
        </div>
    );
}
