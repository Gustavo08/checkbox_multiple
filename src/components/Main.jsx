import React, { useState } from 'react';

import {data} from '../utils/data';

const Main = () => {
    const [ checkeds, setChecked ] = useState(
        new Array(data.length).fill(false)
    );

    const [ total, setTotal ] = useState(0);

    const handleOnChange = position  => {
        const list_checkeds = checkeds.map((item, i) => 
            i === position ? !item : item
        );

        setChecked(list_checkeds);


        const totalPrice = list_checkeds.reduce((sum, currentItem, i) => {
            return currentItem ? sum + data[i].amount : sum
        }, 0);

        setTotal(totalPrice);

    }

    return (
        <div className = "d-flex flex-column flex-md-row p-4 gap-5 py-md-5 align-items-center justify-content-center">
            <div className = "list-group">
                {
                    data?.map((item, i) => {
                        return (
                            <label className = "list-group-item d-flex gap-3" key = { i }>
                                <input
                                    className = "form.check-input flex-shrink-0"
                                    type      = { "checkbox" }
                                    checked   = { checkeds[i] }
                                    onChange  = { () => handleOnChange(i) }
                                />
                                <span className ="pt-1 form-checked-content">
                                    <strong>{ item.title }</strong>
                                    <small className = "d-block text-body-secondary">
                                        $ { item.amount }
                                    </small>
                                </span>
                            </label>
                        )
                    })
                }
                <label className = "list-group-item gap-3 bg-body-tertiary">
                    <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
                        <span>Total</span>
                        <span> $ { total } </span>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Main;
