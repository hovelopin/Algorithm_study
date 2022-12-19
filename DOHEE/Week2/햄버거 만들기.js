function solution(ingredient) {
    var answer = 0;
    const newIngredient = [];

    ingredient.forEach((ing) => {
        newIngredient.push(ing);

        if (newIngredient.length >= 4) {
            const stack = newIngredient.slice(-4).join("");
            if (stack === "1231") {
                newIngredient.pop();
                newIngredient.pop();
                newIngredient.pop();
                newIngredient.pop();
                answer += 1;
            }
        }
    });

    return answer;
}
