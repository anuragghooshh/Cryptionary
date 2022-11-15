import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Item from './item';
import instagram from '../resources/social/Instagram.svg'
import linkedIn from '../resources/social/Linkedin.svg'
import coin from '../resources/coin.png'


function Main(){
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    let data = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(()=>{
        axios.get(`${data}`).then(res => {
            setCoins(res.data);
        }).catch(error => console.log(error))
    });

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className="container">
                <nav>
                    <p>Made with &#10084; by Anurag Ghosh.</p>
                    <div>
                        <a href="https://www.instagram.com/anuragghoshh/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"/></a>
                        <a href="https://www.linkedin.com/in/anurag-ghosh-2b8496144/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn"/></a>
                    </div>
                </nav>
                <div className="headAndImage">

                    <div className="head">
                        <header>
                            <h1 className="heading">Cryptionary</h1>
                        </header>
                        <div className="search">
                            <p>SEARCH FOR COINS</p>
                            <input type="text" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="image">
                        <img src={coin} alt="Coin!" />
                    </div>

                </div>

                <div className="holder">
                    <ul className="tuppleNames">
                        <li>Name</li>
                        <li>Price</li>
                        <li>Volume</li>
                        <li>24hr</li>
                        {/* <li>7d</li> */}
                    </ul>
                    <div className='cryptoData'>
                        {filteredCoins.map((coin) => {
                            return (
                                <Item
                                    key = {coin.index}
                                    logo = {coin.image}
                                    name = {coin.name}
                                    symbol = {coin.symbol}
                                    volume = {coin.market_cap}
                                    price={coin.current_price}
                                    hour24={coin.price_change_percentage_24h}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;