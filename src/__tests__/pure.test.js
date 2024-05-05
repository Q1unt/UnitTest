import { pure } from "../pure";

test("Тест character здоровье", () => {
    let character = {name: 'Маг', health: 90}
    const result = pure(character);
    expect(result).toBe('health');
})

test("Проверка charecter ранения", () => {
    let character = {name: 'Маг', wounded: 90}
    const result = pure(character);
    expect(result).toBe('wounded');

})

test("Проверка charecter wounded", () => {
    let character = {name: 'Маг', critical: 90}
    const result = pure(character);
    expect(result).toBe('critical');

})
