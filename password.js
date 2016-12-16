class Password{
  //The first part of the class.
  constructor(pub,priv){
    this.publickey=pub; // publickey is a string of any kind of symbol or character.
    this.privatekey=priv; // privatekey is a secret string of numbers "xxxx-xxxx-xxxx"
  }
  //Instance functions below this comment.
  validPublicKey(){
    if(this.public.length>8 && this.length<=25){ //Will conditionally check to see if the string is between 8 and 25 characters long inclusively.
      return true;
    }
    else{
      return false;
    }
  }
  validPrivateKey(){
    if(this.privatekey.charAt)([4]&&[9]=="x")){ //conditionally check if the dashes are in the correct location
      return true; //check to see if the three groups of four characters are actually numbers
    }
  }
  else{
    return false; //privatekey passes both criteria, then return true, otherwise return false
  }
  //Static function below this comment.
  static makePrivateKey(){
    let key = [];
    let limit = 14;
    let group1="";
    let group2="";
    let group3="";
    for(c=0; c<4;c++){ //builds random 12 digit number with two dashes
      group1 += Math.floor(Math.random()*10);
      group2 += Math.floor(Math.random()*10);
      group3 += Math.floor(Math.random()*10);
    }
    return group1 + "-" + group2 + "-" + group3;
  }
}
