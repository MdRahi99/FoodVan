const ItemCard = (items) => {

    const {ImageUrl ,Name} = items.items;

    console.log(ImageUrl);

    return (
        <>
            <div>
                <img className="h-44 w-full lg:h-64 lg:w-64 rounded-2xl" src={ImageUrl ? ImageUrl :'Loading...'} alt={Name} />
                <h1 className="text-center text-slate-600 mt-1">{Name}</h1>
            </div>
        </>
    );
};

export default ItemCard;