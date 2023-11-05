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
const CarRegister = () => {
    const [productCondition, setNewProductCondition] = useState("");
    const [productContactInfo, setNewProductContactInfo] = useState("");
    const [productComment, setNewProductComment] = useState("");
    const [productDate, setNewProductDate] = useState(new Date());
    const [productImageURL, setNewProductImageURL] = useState('null');
    const [productName, setNewProductName] = useState("");
    const [productPrice, setNewProductPrice] = useState(0);
    const [productOwner, setNewProductOwner] = useState("");
  
  const productCollectionRef = collection(db, "products");

  const [fileUpload, setFileUpload] = useState(null);
  const onSubmitProduct = async () => {
    try {
      const madeYearTimestamp = Timestamp.fromDate(new Date(productDate));
      const product = {
        comment: productComment,
        condition : productCondition,
        contactInfo : productContactInfo,
        date: madeYearTimestamp,
        imageURL : productImageURL,
        name : productName,
        ownerId : productOwner,
        price : productPrice
      };
  
      const productRef = await addDoc(productCollectionRef, product);
  
      const imageUUID = uuidv4();
      const imageName = `${productRef.id}_${imageUUID}`;
      const fileFolderRef = ref(storage, `productImages/${imageName}`);
  
      if (fileUpload) {
        const uploadImagePromise = uploadBytes(fileFolderRef, fileUpload)
          .then(() => getDownloadURL(fileFolderRef))
          .then((imageURL) => {
            product.imageURL = imageURL;
          });
        await Promise.all([uploadImagePromise]);

        await updateDoc(doc(db, "products", productRef.id), {
          imageURL: product.imageURL,
        });
      }
  
        setNewProductCondition("");
        setNewProductContactInfo("");
        setNewProductComment("");
        setNewProductDate(new Date());
        setNewProductImageURL(product.imageURL);
        setNewProductName("");
        setNewProductPrice(0);
        setNewProductOwner("");
    
  
      console.log("Car data and image added successfully");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
        <Navbar/>
        <div className="max-w-md mx-auto p-4 space-y-4">
  <h3 className="text-lg font-semibold">Add Product</h3>
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Condition"
    type="text"
    onChange={(e) => setNewProductCondition(e.target.value)}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Contact Info"
    type="text"
    onChange={(e) => setNewProductContactInfo(e.target.value)}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Comment"
    type="text"
    onChange={(e) => setNewProductComment(e.target.value)}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Name"
    type="text"
    onChange={(e) => setNewProductName(e.target.value)}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Price"
    type="number"
    onChange={(e) => setNewProductPrice(parseFloat(e.target.value))}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
    placeholder="Owner"
    type="text"
    onChange={(e) => setNewProductOwner(e.target.value)}
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