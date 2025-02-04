import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    };
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {};
    return (
        <div>
            <input value={value} onChange={changeHandler} />
            <button onClick={clickHandler}>asdas</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
            <div style={{ width: 200, height: 200, background: 'red', marginTop: 15 }}></div>
        </div>
    );
};
export default EventsExample;
