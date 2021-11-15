import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return <>
        <h1>안녕하세요!!</h1>
        <Link to={'1/guides'}>롯데백화점 피난안내도</Link>
    </>
}

export default Home;