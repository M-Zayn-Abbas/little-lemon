import React from 'react';

function Menu({ categories }) {
    return (
        <div className="menu">
            <h2>Menu</h2>
            {categories.map(category => (
                <div className="category" key={category.id}>
                    <h3>{category.name}</h3>
                    <ul>
                        {category.items.map(item => (
                            <li key={item.id}>
                                <span className="item-name">{item.name}</span>
                                <span className="item-price">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Menu;
