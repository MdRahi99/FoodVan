import ItemCard from "../ItemCard/ItemCard";

/* eslint-disable react/prop-types */
const Popular = ({ filterPopularData, title }) => {

    return (
        <>
            <div className="p-4">
                <h1 className="text-lg mb-3 font-medium">{title}</h1>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                    {
                        filterPopularData.map(items => {
                            return <ItemCard key={items?.Id} items={items} />
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Popular;