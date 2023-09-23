import CardPhones from "./CardPhones";


const Phones = ({data}) => {
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {
                data?.map(item=><CardPhones key={item.id} item={item}></CardPhones>)
            }
        </div>
    );
};

export default Phones;