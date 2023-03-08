var resultList=[];

if ("resultList" in localStorage) {
  var resultList = JSON.parse(localStorage.getItem("resultList"));
  createTableRows(resultList)
}

function addData() {
  var StockName = document.getElementById("Stock_Name").value;
  var BuyingQuantity = document.getElementById("Buying_Quantity").value;
  var BuyingPrice = document.getElementById("Buying_Price").value;
  var SellingQuantity = document.getElementById("Selling_Quantity").value;
  var SellingPrice = document.getElementById("Selling_Price").value;
 
  var BTM = BuyingQuantity*BuyingPrice
  var STM = SellingQuantity*SellingPrice
  var PL = STM-BTM
  var Pcent = (PL/BTM)*100
  resultList.push({
    StockName: StockName,
    BuyingQuantity: BuyingQuantity,
    BuyingTotalAmount : BTM,
    BuyingPrice: BuyingPrice,
    SellingQuantity: SellingQuantity,
    SellingPrice: SellingPrice,
    SellingTotalAMount : STM,
    ProfitLoss : PL,
    Pcent : Pcent.toFixed(2)
  });

  localStorage.setItem("resultList", JSON.stringify(resultList));

  createTableRows(resultList)
  document.getElementById("stockForm").reset();
  console.log(resultList);
}



function createTableRows(resultList){

let output = "";
  resultList.forEach((element) => {
    output += `<tr>
    <td>${element.StockName}</td>
    <td>${element.BuyingQuantity}</td>
    <td>${element.BuyingPrice}</td>
    <td>${element.BuyingTotalAmount}</td>
    <td>${element.SellingQuantity}</td>
    <td>${element.SellingPrice}</td>
    <td>${element.SellingTotalAMount}</td>
    <td>${element.ProfitLoss}</td>
    <td>${element.Pcent}</td>
    
    
    </tr>`;
  });

  document.getElementById("table1").innerHTML = output
}