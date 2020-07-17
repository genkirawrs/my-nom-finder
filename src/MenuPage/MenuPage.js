import React, { Component } from 'react';
import config from '../config'

import './MenuPage.css';

class MenuPage extends Component {
  state = {
    menu: [],
    error: null,
  };

  componentDidMount() {
        //clear out any errors in state
    this.clearError()

        //call to nomfinder server
    fetch(`${config.API_ENDPOINT}/menu`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => this.setMenu(res))
      .catch(error => this.setState({ error }))
  }

  setMenu = menu => {
    this.setState({ menu })
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  organizeMenu(menuItems){
    const menu_categories = ['Sweet', 'Savory', 'Sides','Beverages']
    let organized_menu = []

    menuItems.forEach(item => {
	if(organized_menu[item.menu_category]){
	    organized_menu[item.menu_category]['items'].push(item)
	}else{
	    organized_menu[item.menu_category] = []
	    organized_menu[item.menu_category]['name'] = menu_categories[item.menu_category - 1]
	    organized_menu[item.menu_category]['items'] = []
	    organized_menu[item.menu_category]['items'].push(item)
	}

    })

    return organized_menu
  }

  decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }

  renderMenu(){
    const menu = this.state.menu
    const menu_order = [2,1,3,4]

    if(menu.length > 0){
	const organized_menu = this.organizeMenu(menu)
	const test = menu_order.map((category) => {
		let menu_list = organized_menu[category]
                let formatted_section = menu_list.items.map(item => {
			let key_str = `${category}_${item.id}`
			let title = this.decodeHTMLEntities(item.item_name)
			let description = this.decodeHTMLEntities(item.item_description)
			let ingredients = ''
			if(item.ingredients){
			    ingredients = `Ingredients: ${item.ingredients}`
			}
			return(
                            <li className='menu-item' key={key_str}>
                                <strong>{title}</strong><br/>
                                <blockquote>
                                    {description}{ description ? <br/> : '' }
                                    {ingredients}{ ingredients ? <br/> : '' }
                                    <strong>$ {item.cost}</strong>
                                </blockquote>
                            </li>
			)
                    })
		
	    return(
		<ul key={category}>
                <li className="menu-title" key={menu_list.name}>{menu_list.name}</li>
		{formatted_section}
		</ul>
	    )
	})
      return test
    }
  }

  render(){ 
    const error = this.state.error

    return(
        <div className="menu-page">
	    <h4>What's on the Menu!</h4>
		{error ? <p>Sorry, there was an error!</p> : this.renderMenu()}
	</div>
    );
  }

}

export default MenuPage;
