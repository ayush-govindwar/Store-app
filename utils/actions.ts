import db from '@/utils/db'


export const fetchFeaturedProducts = async()=>{
    const products = await db.product.findMany({
       where:{
        featured:true, //only get featured products
       } 
    })
    return products //we get array of products
}

export const fetchAllProducts = async ()=>{
    return db.product.findMany({
        orderBy:{ //orderby created at in descending order
            createdAt: 'desc',
        }
    })
}
import { redirect } from 'next/navigation';

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect('/products');
  }
  return product;
};