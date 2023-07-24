import {useState, useEffect} from 'react';
import axios from "axios";
const url = 'api/products';

const Basic = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const {data} = await axios.get(url);
            setProducts(data)
        } catch (err) {
            // console.log(err);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <section className={'section section-center'}>
            <div className="title">
                <h2>basic setup</h2>
                <div className="title-underline"></div>
            </div>
            
          {products &&   <div className="products">
                {
                    products.map(prod => {
                        const {id, url, price, name} = prod;
                        return (
                            <article className={'product'} key={id}>
                                <img src={url} alt={name}/>
                                <div className="info">
                                    <h5>{name}</h5>
                                    <h5 className={'price'}>${price}</h5>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
}

{ !products && 

<div className="products"> 
<article className={'product'} key="1">
                                <img src="data:image/jpeg;base64,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" alt={name}/>
                                <div className="info">
                                    <h5>Demo</h5>
                                    <h5 className={'price'}>120$</h5>
                                </div>
                            </article>
</div>
}

        </section>
    );
};

export default Basic;
