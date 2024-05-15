import { useEffect, useState } from "react";

import data from "../data/products.json";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail/ItemDetail";

import { getFirestore, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc( db, 'items', id );

    getDoc(refDoc).then((snapshot) =>{
      setProduct({ id:snapshot.id , ...snapshot.data() });
    });
  }, [id]);

  if (!product) return <div>Loading..</div>;

    return (
    <div>
    <ItemDetail {...product}/>
      
    </div>
  );
};