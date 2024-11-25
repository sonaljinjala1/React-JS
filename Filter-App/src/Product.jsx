import React from "react";

const Product = ({ categories, filterdata, categoryButtonClick }) => {
    return (
        <div align="center">
            <div className="category mb-3">
                {
                    categories.map((cat, index) => (
                        <button 
                            key={index} 
                            onClick={() => categoryButtonClick(cat)} 
                            className="mx-2 btn btn-success btn-sm"
                        >
                            {cat}
                        </button>
                    ))
                }
            </div>
            <div className="item">
                <div className="row justify-content-center">
                    {
                        filterdata.length > 0 ? (
                            filterdata.map((pr) => (
                                <div className="col-md-4 mb-4   justify-content-center" key={pr.id}>
                                    <div className="card text-center" style={{width: "18rem", height: "30rem"   }} >
                                        <img src={pr.image} className="card-img-top" alt={pr.name}  width={"200px"} />
                                        <div className="card-body">
                                            <h5 className="card-title">{pr.name}</h5>
                                            <p className="card-text">{pr.price}</p>
                                            <a href="#" className="btn btn-primary">Go Somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No products found</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
