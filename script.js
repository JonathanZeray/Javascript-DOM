
console.log("salt> We are writing to the console");

myFunctions = {
    getCompanyName: function () {
      return "SALT";
    },
  };
  console.log("salt> Functions loaded");

const addListInMain = (numberOfLi) => {
    
    const newList = document.createElement("ul");

    for(let i = 0; i < numberOfLi; i++){
        const liItem = document.createElement("li");
        liItem.textContent = `Item ${i + 1}`
        newList.appendChild(liItem);
    }
    const firstUL = document.getElementById("ulDiv");
    firstUL.appendChild(newList);
}

function removeDiv(id){
    const deleteDiv = document.getElementById(`${id}`);
    deleteDiv.remove();
}