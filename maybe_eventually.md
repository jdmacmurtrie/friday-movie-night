checkCorrectBoxes() {
  let allBoxes = document.getElementsByClassName("checkbox")
  for(var i = 0; i < allBoxes.length; i++)
  {
#something happens
  }
  let selectedBoxes = []
  this.state.toppings.forEach((topping) => {
    selectedBoxes.push(topping)
    document.getElementsByName(topping)[0].checked = true;
  })
}
