import React from "react";
import "./Header.css";
import ShapesList from "./shapesList/ShapesList";

export default function Header() {
    return (
        <div className="header">
            <h1>Header</h1>
            <ShapesList />
        </div>
    );
}
