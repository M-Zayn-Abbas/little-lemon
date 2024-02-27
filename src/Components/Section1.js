import pic from '../img/section1.jpg'
import '../Cssfiles/Section1.css';
import { useNavigate } from 'react-router-dom';
const Section1 = () => {

    const navigate= useNavigate();

    return (
        <>
        <section className="section1">
            <div className='text-content'>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
        <h4 className='multiline'>We are a family owned Mediterranean restaurant,
        focused on traditional recipies served with a modern
        twist </h4>

    <button className='reserve-button' onClick={()=> navigate('booking')}>Reseve Table</button>
    </div>
    <img src={pic} alt="pic of restaurant"/>
</section>
        </>
    )

}

export default Section1;
