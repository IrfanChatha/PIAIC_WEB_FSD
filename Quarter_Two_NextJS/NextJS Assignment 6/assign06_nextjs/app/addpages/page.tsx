"use client"

import React from 'react';
import { useState } from 'react';

function Addpage() {

    const [title, setTitle] = useState("Old Title");

    function newTitleHandler() { return setTitle("New Title") }

    function oldTitleHandler() { return setTitle("Old Title") }

    return (
        <div>
            <h1><b>USE STATE PROGRAM 2024 {title}</b></h1>

            <button onClick={newTitleHandler}>New Title</button>

            <button onClick={oldTitleHandler}>Old Title</button>
        </div>
    );
}

export default Addpage;