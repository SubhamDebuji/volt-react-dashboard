import React from "react";
const Categories = ({ categories, filterItems }) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };
    var now = new Date();
    var day = now.getDayName();
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    (category != day) ?
                        <button
                            type="button"
                            className="filter-btn"
                            key={index}
                            onClick={() => filterItems(category)}
                        >
                            {category}
                        </button> : <button
                            type="button"
                            className="filter-btn"
                            style={{ backgroundColor: 'skyblue', color: 'white' }}
                            key={index}
                            onClick={() => filterItems(category)}
                        >
                            {category}
                        </button>
                );
            })}
        </div>
    );
};

export default Categories;
