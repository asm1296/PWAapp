export interface IShoppingPageProps{
    
};

export interface IErrorComponentProps{

};

export interface IAddProductsectionProps{
    productCount:number;
    addProduct:any;
    userName : string;
}

export interface IProductListSectionProps{
    className:any
    setProductCount : any;
    newPrd:any;
    throwError:boolean;
}

export interface IAddProductPopupProps{
    popupChange: any;
    id:number;
    addProduct:any;

}

export interface IProductDetailsProps{
    focus:boolean;
    removeProduct:any;
    setProductCount:any;
    productCount:number;
    productID:number;
    productName:string;
    productPrice:string;
    productDescription:string;
}

export interface ILoginPageProps{
    loginActionCreater : any;
}
