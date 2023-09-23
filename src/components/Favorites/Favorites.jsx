import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState()
    const [noFound, setNoFound] = useState()
    const [isShow, setIsShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)


    console.log(favorites);


    useEffect(() => {
        const favoritesItem = JSON.parse(localStorage.getItem('favorites'))
        if (favoritesItem) {
            setFavorites(favoritesItem)
            const total = favoritesItem?.reduce((pre,current)=>pre+current.price,0)
            const Total = total.toFixed(2);
            setTotalPrice(Total)
        } else {
            setNoFound("No Data Found")
        }
    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setFavorites([])
        setNoFound("No Data Found")
    }



    return (
        <div className="text-center space-y-10 mt-5">
            {
                favorites?.length > 0 && <button onClick={() => { handleRemove() }} className="btn btn-warning">Delate all</button>
            }
            <div>
                <h1>Total Price :{totalPrice}</h1>
            </div>
            {
                noFound ? <p>{noFound}</p> :


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10" >
                        {

                            isShow ?

                                favorites?.map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                                :
                                favorites?.slice(0,2).map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)


                        }

                    </div>
            }
           {
            favorites?.length> 2 && <div onClick={() => setIsShow(!isShow)} className="btn btn-warning">
            {isShow? <button>See less</button> : <button>See All</button>}
        </div>
           }
        </div>
    );
};

export default Favorites;