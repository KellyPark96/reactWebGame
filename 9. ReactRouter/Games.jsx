import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import MineSearch from './Routes/MineSearch';
import About from './Routes/About';
import GameMatcher from './Routes/GameMatcher';

const Games = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/MineSearch">MineSearch</Link>
                &nbsp;
                <Link to="/About">About</Link>
                &nbsp;
                <Link to="/game/1">Game Matcher</Link>
            </div>
            <Routes>
                <Route path="/MineSearch" element={<MineSearch />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/game/:name" element={<GameMatcher />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Games;