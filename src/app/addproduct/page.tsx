'use client'
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'; 
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import {storage,db} from '../../store/firebase'
import Navbar from "@/components/Navbar";
import defaultImage from '@/assets/img/Tipos de comércio electrónico_0.png'
import {useUser} from "@/context/UserContext"
const CarRegister = () => {
  const [formValues, setFormValues] = useState({
    productCondition:'',
    productContactInfo:'',
    productComment:'',
    productDate:new Date(),
    productImageURL:'null',
    productName:'',
    productPrice:0,
    productOwner:'',
    productType:'',
  })
    // const [productCondition, setNewProductCondition] = useState("");
    // const [productContactInfo, setNewProductContactInfo] = useState("");
    // const [productComment, setNewProductComment] = useState("");
    // const [productDate, setNewProductDate] = useState(new Date());
    // const [productImageURL, setNewProductImageURL] = useState('null');
    // const [productName, setNewProductName] = useState("");
    // const [productPrice, setNewProductPrice] = useState(0);
    // const [productOwner, setNewProductOwner] = useState("");
    // const [productType, setProductType] = useState(""); 
    const user = useUser();
    const userId = user?.user?.uid;
    const productCollectionRef = collection(db, "products");

  const [fileUpload, setFileUpload] = useState(null);
  const onSubmitProduct = async () => {
    try {
      const madeYearTimestamp = Timestamp.fromDate(new Date(formValues.productDate));
      const product = {
        comment: formValues.productComment,
        condition: formValues.productCondition,
        contactInfo: formValues.productContactInfo,
        date: madeYearTimestamp,
        imageURL: formValues.productImageURL,
        name: formValues.productName,
        ownerId: userId,
        price: formValues.productPrice,
        type: formValues.productType
      };
      const productRef = await addDoc(productCollectionRef, product);
      const imageUUID = uuidv4();
      const imageName = `${productRef.id}_${imageUUID}`;
      const fileFolderRef = ref(storage, `productImages/${imageName}`);
  
      if (fileUpload) {
        await uploadBytes(fileFolderRef, fileUpload)
        const imageURL = await getDownloadURL(fileFolderRef);
  
        await updateDoc(doc(db, "products", productRef.id), {
          imageURL: imageURL, // Update imageURL with the actual URL
        });
        setFormValues({...formValues, productImageURL:imageURL});
      }
  
    setFormValues({
      productCondition:'',
      productContactInfo:'',
      productComment:'',
      productDate:new Date(),
      productImageURL:'null',
      productName:'',
      productPrice:0,
      productOwner:'',
      productType:'',
    })
  
      console.log("Car data and image added successfully");
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <>
        <Navbar/>
        <div className="max-w-md h-[100vh] mx-auto p-4 pt-[100px] space-y-4 items-center">
  <h3 className="text-lg font-semibold">Add Product</h3>
  <select
  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
  onChange={(e) =>  setFormValues({...formValues, productCondition:e.target.value})}
  value={formValues.productCondition}>
  <option value="">---x---</option>
  <option value="used">old</option>
  <option value="new">new</option>
</select>
    <select
  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
  onChange={(e) => setFormValues({...formValues, productType:e.target.value})}
  value={formValues.productType}
>
  <option value="">Select Product Type</option>
  <option value="notebook">Notebook</option>
  <option value="electronProduct">Electron baraa</option>
  <option value="clothes">Huwtsas hereglel</option>
  <option value="other">Other</option>
</select>
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Contact Info"
    value={formValues.productContactInfo}
    type="text"
    onChange={(e) => setFormValues({...formValues, productContactInfo:e.target.value})}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Comment"
    value={formValues.productComment}
    type="text"
    onChange={(e) => setFormValues({...formValues, productComment:e.target.value})}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Name"
    value={formValues.productName}
    type="text"
    onChange={(e) => setFormValues({...formValues, productName:e.target.value})}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Price"
    type="number"
    value={formValues.productPrice}
    onChange={(e) => setFormValues({...formValues, productPrice:parseFloat(e.target.value)})}
  />
  <input type="file" onChange={(e) => {
  const selectedFile : File | null | any = e.target.files ? e.target.files[0] : null;
  setFileUpload(selectedFile || defaultImage);
}} />
   <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onSubmitProduct}>Submit</button>
</div>

  </>
  );

};

export default CarRegister;