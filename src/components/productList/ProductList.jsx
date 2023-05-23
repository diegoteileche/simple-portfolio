import Product from '../product/Product'
import './productList.css'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl texts">
        <h1 className="pl-title">Create & inspire. It´s Lama</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore reprehenderit quod quo sed! Esse, doloribus reprehenderit corporis quis rem distinctio enim veniam similique architecto harum nam impedit eaque libero.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList