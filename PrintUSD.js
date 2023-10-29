let URL = "https://restcountries.com/v3.1/all";

const checkName = (val) => val.currencies == "USD";

function getresponsevalue(){
    let obj = JSON.parse(this.response);
       
    const datas = obj
      .filter((item) => item?.currencies?.USD?.name === "United States dollar")
      
    console.log('datas', datas);

    
}
const req = new XMLHttpRequest;
req.addEventListener("load", getresponsevalue);
req.open("GET", URL);
req.send();