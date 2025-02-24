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