let cust = {
  name: "Acme Corp.",
  address: {
    street: "1001 Oak Drive",
    city: "Summerville",
    state: "OR",
    zip: "97123"
  }
};
let {address: {city: city}, address: {state: state}} = cust;
console.log("City:", city, "\nState:", state); 
