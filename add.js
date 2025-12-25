let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function addItem() {
  const itemNameInput = document.getElementById("itemName");
  const itemQtyInput = document.getElementById("itemQty");

  const name = itemNameInput.value.trim();
  const qty = itemQtyInput.value;

  if (name === "" || qty === "") {
    alert("Please enter item name and quantity");
    return;
  }

  inventory.push({ name, qty });
  localStorage.setItem("inventory", JSON.stringify(inventory));

  itemNameInput.value = "";
  itemQtyInput.value = "";

  renderInventory();
}

function renderInventory() {
  const list = document.getElementById("inventoryList");
  list.innerHTML = "";

  inventory.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.qty}`;
    list.appendChild(li);
  });
}

renderInventory();
