function cakes(recipe, available) {

  let max = Number.MAX_VALUE;

  for (let ingredient in recipe) {
    if (!available[ingredient]) {
      return 0;
    }

    let avai = available[ingredient];
    max = Math.min(max, Math.floor(avai / recipe[ingredient]));
  }
  return max;
}

cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });