import "./Food.css";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";
import React, { useState } from "react";

const allCategories = [...new Set(items.map((item) => item.title))];

export default function Main() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories] = useState(allCategories);

    const filterItems = (title) => {
        if (title === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.title === title);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2 className="text-center">Daily Food menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

