
'use client'
import {useState,useEffect} from "react"
import Navbar from "@/components/Navbar";
import {doc , collection, onSnapshot, getDocs} from "firebase/firestore"
import  {db}  from "@/store/firebase";
import {Card} from 'antd'
import ProductPopup from '../app/products/ProductPopUp'; // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const SwiperComponent = () =>{
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
      mjhbjh,mgbjkhbyjk
<div className="h-[100vh] flex justify-center items-center" >
<Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
  {productList.map((product) => (
        <SwiperSlide>
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
      </SwiperSlide>
    
    
   
  ))}
         </Swiper>
  
  {selectedProduct && (
    <ProductPopup product={selectedProduct} onClose={closeProductPopup} />
  )}
  
 

</div>

    </>
  

  

    )
}

export default SwiperComponent;
