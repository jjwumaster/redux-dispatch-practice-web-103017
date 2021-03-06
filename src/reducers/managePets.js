export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pet] };
    case "REMOVE_PET":
      let removeIndex = state.pets.findIndex(pet => pet.id === action.id);
      return {
        pets: [
          ...state.pets.slice(0, removeIndex),
          ...state.pets.slice(removeIndex + 1)
        ]
      };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  let container = document.getElementById("container");
  let petsList = state.pets.map(pet => `<li>${pet.name}</li>`);
  container.innerHTML = `<ul>${petsList}</ul>`;
}
