import React, { useContext, useEffect, } from 'react';
import { Link, } from 'react-router-dom';

import { ExchangeRateContext, } from '../contexts/ExchangeRateContext';

function Main(props) {
    const exchangeRateContext = useContext(ExchangeRateContext);

    useEffect(() => {
        console.log('exchangeRateContext.data: ', exchangeRateContext.data);
    }, [exchangeRateContext.data]);
    
    return (
        <div>
            <div>
                개발중 ㅋ    
            </div>  
            {exchangeRateContext.data.map((currency, cI) => {
                return (
                    <div key={cI}>
                        <Link 
                            to={`/currency/${currency.cur_unit}`}
                            style={{ width: '100%', margin: '10px 0', textDecoration: 'none', color: 'black', }}
                        >
                            {currency.cur_nm} ({currency.cur_unit}): {currency.bkpr}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Main;