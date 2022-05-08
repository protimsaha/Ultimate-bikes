import { useEffect, useState } from "react"

const useBrands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('https://salty-mountain-12795.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return [brands, setBrands]
}
export default useBrands;