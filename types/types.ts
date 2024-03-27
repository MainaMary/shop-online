export type CartProductType = {
  id: string;
  name: string;
  desc: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number | string;
  image: string;
};
export interface SelectedImgType {
  color: string;
  colorCode: string;
  image: string;
}
export interface CurrentuserProps {
  id: string;
  name: string;
  email: string;
  emailVerified: null;
  image: null;
  hashedPassword: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
}
