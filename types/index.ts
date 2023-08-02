import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface SheetData {
  supplierCode: string;
  barCode: string;
  inDate: Date;
  supplierNm: string;
  productNm: string;
  buyingProductNm: string;
  optionNm: string;
  orderQuantity: number;
  optionText: string;
  inQuantity: number;
  inIssueText: string;
}
