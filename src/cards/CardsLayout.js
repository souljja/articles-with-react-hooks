import React from 'react';
import { Card } from './card';
import './CardsLayout.scss';

export const CardsLayout = (props) => {
    const cards = [
        {
            id: 1,
            title: 'First',
            text: 'Some text',
            rating: 1,
        },
        {
            id: 2,
            title: 'Second',
            text: 'Some text',
            rating: 3
        },
        {
            id: 3,
            title: 'third',
            text: 'Some text',
            rating: 5,
        },
        {
            id: 4,
            title: 'fourth',
            text: 'Some text',
            rating: 1,
        }
    ];

    const getCards = () => cards.map((card) => (
        <Card key={card.id} card={card} />
    ));

    return (
        <div className="CardsLayout-container">
            {getCards()}
        </div>
    );
};

/*


function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}
*/