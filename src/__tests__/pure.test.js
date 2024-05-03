import { pure } from "../pure";

test("test charecter health", () => {
    let character = {name: 'Маг', health: 90}
    const result = pure(character);
    expect(result).toBe('health');

});

test("test charecter wounded", () => {
    let character = {name: 'Маг', wounded: 90}
    const result = pure(character);
    expect(result).toBe('wounded');

});

test("test charecter critical", () => {
    let character = {name: 'Маг', critical: 90}
    const result = pure(character);
    expect(result).toBe('critical');

});
