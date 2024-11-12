import './Title.css'
import Product from './Product'
function Title({title,para,tech,eprice}){
    console.log(tech);
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
    const styles = {backgroundColor: eprice>3000?"yellow":null}
    return (
        <>
    <h1 style={styles}> {title} </h1>
    <h3>About: {para}</h3>
    <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>  // Each fruit is rendered as an <li> item
        ))}
      </ul>
    <p>Technologies:- {tech}</p>
    <Product price={eprice}/>
    </>
)
  }

export default Title