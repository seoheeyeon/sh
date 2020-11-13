import React, { createContext, useState, useEffect, useCallback} from 'react';

const authkey = 'OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9';

const ExchangeRateContextValue = {
    data: [],
    getCurrencyDetail: () => {},
};

export const ExchangeRateContext = createContext(ExchangeRateContextValue);

export function ExchangeRateContextProvider(props) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${'2020-11-11'}&data=${'AP01'}`)
        .then(response => {
            return response.json()
        })
        .then(responseJSON => {
            console.log('response: ', responseJSON);
            setData(responseJSON);
        });
    }, []);

    const getCurrencyDetail = useCallback(currencyCode => {
        console.log('currencyCode: ', currencyCode);
        const matchedCurrency = data.filter(currency => {
            return currency.cur_unit === currencyCode;
        });

        console.log('matchedCurrency: ', matchedCurrency);

        if (!matchedCurrency.length) {
            return false;
        }

        return matchedCurrency[0];
    }, [data]);

    return (
        <ExchangeRateContext.Provider 
            value={{
                data, // =>  data: data,
                getCurrencyDetail,
            }}
        >
            {props.children}
        </ExchangeRateContext.Provider>
    );
}
