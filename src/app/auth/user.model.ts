
export class User{
    constructor(public emailL: string, public id: string, private _token: string, private _tokenExpirationDate: Date){}

    //getter
    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        }
        return this._token;
    }
}