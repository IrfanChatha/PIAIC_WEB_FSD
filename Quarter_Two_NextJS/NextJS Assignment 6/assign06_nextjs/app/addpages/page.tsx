"use client"

import React from 'react';
import { useState } from 'react';

function Addpage() {

    const [title, setTitle] = useState("Old Title");

    return (
        <div>
            <h1><b>USE STATE PROGRAM 2024 {title}</b></h1>



        </div>
    );
}

export default Addpage;