import React from "react"
const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {items.map((menuItem) => {
                const { id, title, category, img, desc } = menuItem;
                var now = new Date();
                var day = now.getDayName();
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo" />
                        <div className="item-info">
                            <header>
                                <h4>{category}</h4>

                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu;
