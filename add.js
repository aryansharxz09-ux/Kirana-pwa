let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function addItem() {
  const name = itemName.value;
  const qty = itemQty.value;

  if (!name || !qty) return;

  inventory.push({ name, qty });
  localStorage.setItem("inventory", JSON.stringify(inventory));

  itemName.value = "";
  itemQty.value = "";

  renderInventory();
}

function renderInventory() {
  inventoryList.innerHTML = "";
  inventory.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.qty}`;
    inventoryList.appendChild(li);
  });
}

renderInventory();
