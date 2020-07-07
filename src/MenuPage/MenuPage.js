import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MenuPage.css';

class MenuPage extends Component {

  render(){ 
    const savoryItems = [ 
          {"name":"savory dish 1","description":"A classic","cost":"$10","ingredients":"Bacon, Lettuce, Tomato"},
          {"name":"savory dish 2","description":"A twist on the original","cost":"$12.50","ingredients":"twist, zing, etc"},
          {"name":"savory dish 3","description":"Feeling adventurous?","cost":"$11","ingredients":"?,??,???"},
          {"name":"savory dish 3","description":"Not for the faint of heart!","cost":"$9","ingredients":"spice,spice,spice"},
      ];
    const sweetItems = [
          {"name":"dessert 1","description":"A perfect follow up to dinner","cost":"$7","ingredients":"sugar, sugar, more sugar"},
          {"name":"dessert 2","description":"Brace for a brain freeze!","cost":"$8","ingredients":"ice cream, milk, sprinkles"},
          {"name":"dessert 3","description":"Zesty dessert","cost":"$6","ingredients":"a, b, c"},
      ];


    return(
        <div className="menu-page">
	    <h4>What's on the Menu!</h4>
		<ul>
		<li className="menu-title">Savory Items</li>
		{savoryItems.map((item,i)=>{
	            return(<li className='menu-item' key={i}>
			<strong>{item.name}</strong><br/>
			<blockquote>
			    {item.description}<br/>
			    Ingredients: {item.ingredients}<br/>
			    <strong>{item.cost}</strong>
			</blockquote>
			

		    </li>);
        	})}
		</ul>

                <ul>
                <li className="menu-title">Sweet Items</li>
                {sweetItems.map((item,i)=>{
                    return(<li className='menu-item' key={i}>
                        <strong>{item.name}</strong><br/>
                        <blockquote>
                            {item.description}<br/>
                            Ingredients: {item.ingredients}<br/>
                            <strong>{item.cost}</strong>
                        </blockquote>


                    </li>);
                })}     
                </ul>
	</div>
    );
  }

}

export default MenuPage;
