'use client'
import {useState,useEffect} from "react"
import Navbar from "@/components/Navbar";
import {doc , collection, onSnapshot, getDocs} from "firebase/firestore"
import  {db}  from "../../store/firebase";
import {Card} from 'antd'
import ProductPopup from './ProductPopUp'; 
const Products = () =>{
  interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageURL?: string; 
  }  
  const [productList, setProductList] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productCollectionRef = collection(db,"products");
  useEffect(() =>{
    

    const getProductList = async () =>{
        try{
            const data  = await getDocs(productCollectionRef);
            const filteredData : any = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              setProductList(filteredData);
              console.log(filteredData);
        }catch(err){
            console.error(err);
        }
    }


    getProductList();
  },[])

  console.log(productList);
  const openProductPopup = (product:any) => {
    setSelectedProduct(product);
  };

  const closeProductPopup = () => {
    setSelectedProduct(null);
  };

    return(
      <>
      <Navbar />
<div className="py-[100px] px-[5vw] h-inherit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {productList.map((product) => (
    <div key={product.id} className="flex flex-col items-center">
      <div
        className="flex flex-col h-50 cursor-pointer"
        onClick={() => openProductPopup(product)}
      >
        <div className="transition-transform duration-1500 h-full group-hover:scale-110">
          <img
            className="rounded-md w-full h-full object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            src={product.imageURL || 'your_default_image_url'}
            alt={product.name}
          />
        </div>
      </div>
      <div className="mt-1 text-center">{product.price}</div>
      <div className="font-bold text-center">{product.description}</div>
    </div>
  ))}
  {selectedProduct && (
    <ProductPopup product={selectedProduct} onClose={closeProductPopup} />
  )}
</div>

    </>
  

  

    )
}

export default Products;
