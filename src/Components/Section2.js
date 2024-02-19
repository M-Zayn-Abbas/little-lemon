import '../Cssfiles/Section2.css';
import greekSalad from '../img/greek-salad.jpg';
import bruchette from '../img/bruchetta.png';
import lemmonDessert from'../img/lemmon-dessert.jpg';
import deliveryIcon from  '../img/5637246.png';
const Section2 = ()=> {
    return(
        <section>
            <div className="heading/button">
    <h1>This week special</h1>
<button >Online Menu</button>
</div>
<section className="dishes">
<article className="dish 1">
    <img className ="foodpic" src={greekSalad} alt="dish1"/>
    <div className='namePrice'>
    <h1>Greek Salad</h1>
    <h2>$12.99</h2>
    </div>
    <p>The famous greek salad of 
        crispy lettuce , peppers, olives
        and our Chicago style feta cheese, garnished 
        with crunchy garlic and rosemary cruotons.
    </p>
    <div className='delimg'>
    <h2>Order a delivery</h2>
    <img className ="delivery" src={deliveryIcon} alt="delivery icon"/>
    </div>

</article>

<article className="dish 2">
    <img className='foodpic' src={bruchette} alt="dish2"/>
    <div className='namePrice'>
    <h1>Bruchette</h1>
    <h2>$5.99</h2>
    </div>
    <p>Our Bruschetta is made from 
        grilled bread that has been 
        smeared with garlic and
         seasoned with salt and olive 
         oil which gives it a nice taste </p>
         <div className='delimg'>
         <h2>Order a delivery</h2>
    <img className='delivery' src={deliveryIcon} alt="delivery icon"/>
    </div>
</article>

<article className="dish 3">
    <img className="foodpic" src={lemmonDessert} alt="dish3"/>
    <div className='namePrice'>
    <h1>Lemmon Dessert</h1>
    <h2>$5.00</h2>
    </div>
    <p>This comes straight from 
        grandma,s recipe book , every 
        last ingredient has been 
        sourced and is as authentic 
        as can be imagined 
    </p>
    <div className='delimg'>
    <h2>Order a delivery</h2>
    <img className="delivery" src={deliveryIcon} alt="delivery icon"/>
    </div>

</article>

</section>
  </section>

    )
}

export default Section2;
