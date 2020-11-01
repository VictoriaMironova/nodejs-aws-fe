import * as Yup from 'yup';

export type Product = {
  id: string,
  productName: string,
  productPicture: string,
  productDescription: string,
  productCategory: number,
  productPrice: number  
};

export const ProductSchema = Yup.object().shape({
  productName: Yup.string().required(),
  productDescription: Yup.string(),
  price: Yup.number().required(),
});
