/* eslint-disable react/prop-types */


const CoffeeCard = ({coffee}) => {

    const {name, quantity, supplier, taste, photo} = coffee

    return (
        <div>
            <div className="card w-10/12 h-48 mt-10 card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button>X</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CoffeeCard;