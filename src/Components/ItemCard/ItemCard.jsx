const ItemCard = (items) => {

    const {ImageUrl ,Name} = items.items;

    return (
        <>
            <div>
                <img className="h-44 w-full lg:h-64 lg:w-64 rounded-2xl" src={ImageUrl} alt="" />
                <h1 className="text-center text-slate-600 mt-1">{Name}</h1>
            </div>
        </>
    );
};

export default ItemCard;