export class Product {
    private _productId! : String;
    public get ProductId() : String {
        return  this._productId;
    }
    public set ProductId(v : string) {
        this._productId = v;
    }
    
    
    private _productTitle!: String;
    public get productTitle(): String {
        return this._productTitle;
    }
    public set productTitle(value: String) {
        this._productTitle = value;
    }
    private _prouctPrice!: number;
    public get prouctPrice(): number {
        return this._prouctPrice;
    }
    public set prouctPrice(value: number) {
        this._prouctPrice = value;
    }

    private _productImage: String ="";
    public get productImage(): String {
        return '/assets/' + this._productImage;
    }
    public set productImage(value: String) {
        this._productImage = value;
    }

    private _category: String = "";
    public get category(): String {
        return this._category;
    }
    public set category(value: String) {
        this._category = value;
    }

    constructor( productID: String,productTitle : String,productPrice : number,productCategory : String,productImage : String){
     this._category = productCategory;
     this._productImage = productImage;
     this._productTitle =productTitle;
     this._productId = productID;
     this._prouctPrice = productPrice;
    }

    
}

