class Password{
  //The first part of the class.
  constructor(pub,priv){
    this.publickey=pub; // publickey is a string of any kind of symbol or character.
    this.privatekey=priv; // privatekey is a secret string of numbers "xxxx-xxxx-xxxx"
  }
  //Instance functions below this comment.
  validPublicKey(){
    if(this.public.length>=8 && this.length<=25){ //Will conditionally check to see if the string is between 8 and 25 characters long inclusively.
      return true;
    }
    else{
      return false;
    }
  }
  validPrivateKey(){

    for(var j =0; this.privatekey.length; j++){
      if(this.privatekey.charAT(4) = "-" && this.privatekey.charAT(9)="-"){
          return false;
      }
      else if(Number.isNaN(Number(this.privatekey.substring(0,4)))){
        return false;
      }
      else if(Number.isNaN(Number(this.privatekey.substring(5,9)))){
        return false;
      }
      else if(Number.isNaN(Number(this.privatekey.substring(10,14)))){
        return false;
      }
      else
        return false;
    }

  //Static function below this comment.
  static makePrivateKey(){
    let key = "";
    let limit = 14;
    let group1="";
    let group2="";
    let group3="";
    for(c=0; c<4;c++){ //builds random 12 digit number with two dashes
      group1 += Math.floor(Math.random()*10);
      group2 += Math.floor(Math.random()*10);
      group3 += Math.floor(Math.random()*10);
    }
    key = group1 + "-" + group2 + "-" + group3;
    return key;
  }
}
