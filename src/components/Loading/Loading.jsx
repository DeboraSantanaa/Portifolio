import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import style from './Loading.module.css';

function Loading() {
    return (
        <div className={style.loader_container}>
            <Spinner animation="grow" className={style.spinner} />
            <Spinner animation="grow" className={style.spinner2} />
            <Spinner animation="grow" className={style.spinner3} />
        </div>
    );
}

export default Loading;
