import React from "react";
import {useSelector} from "react-redux";

export default function Payment() {
    const data = useSelector((state) => state.user);
    return (
        <div>
            <h3>
                {data.username}, {data.balance}
            </h3>
            <button>Pay</button>
        </div>
    );
}