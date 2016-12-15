class Password{
  //The first part of the class.
  constructor(pub,priv){
    this.publickey=pub; // publickey is a string of any kind of symbol or character.
    this.privatekey=priv; // privatekey is a secret string of numbers "xxxx-xxxx-xxxx"
  }
  //Instance functions below this comment.
  validPublicKey(){
    if(this.public.length>8 && this.length<=25){
      return true;
    }
  else{
    return false;
  }
  }
  validPrivateKey(){
    if(this.privatekey.chat)([4]&&[9]=="x")){
      return true;
    }
  }
  else{
    return false;
  }
  //Static function below this comment.
}
