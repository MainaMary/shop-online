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
