import { useEffect, useState } from "react"



// making of a custom hook
function currencyInfo(currency) {

    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data;
} // custom hook ends here.

//  here res[currency] is an object containing one key-value pair.
// The key is the currency code (like "usd"). for example {
//     "usd": {
//       "eur": 0.85,
//       "gbp": 0.75,
//       "jpy": 110.53
//     }
//   }

export default currencyInfo;