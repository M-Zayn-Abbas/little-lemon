import pic from '../img/section1.jpg'
import '../Cssfiles/Section1.css';
const Section1 = () => {

    return (
        <>
        <section className="section1">
            <div className='text-content'>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
        <h4 className='multiline'>We are a family owned Mediterranean restaurant,
        focused on traditional recipies served with a modern
        twist </h4>

    <button>Reseve Table</button>
    </div>
    <img src={pic} alt="pic of restaurant"/>
</section>
        </>
    )

}

export default Section1;
