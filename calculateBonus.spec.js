const calculateBonus = require('./calculateBonus');

describe("Тест-сьют для подсчета целых бонусов", () => {
  it("Подсчет бонусов для sum = 50", () => {
    expect(calculateBonus(30, 24)).toEqual(50);
  });

  it("Подсчет бонусов для sum = 0", () => {
    expect(calculateBonus(50, -50)).toEqual(0);
  });

  it("Подсчет бонусов для = 50", () => {
    expect(calculateBonus(11, 39)).toEqual(50);
  });
});

describe("Тест-сьют для подсчета  бонусов с десятыми и сотыми", () => {
  it("Подсчет бонусов для sum = 50", () => {
    expect(calculateBonus(48.49, 1.51)).toEqual(50);
  });

  it("Подсчет бонусов для sum = 0", () => {
    expect(calculateBonus(0.1, -0.1)).toEqual(0);
  });

  it("Подсчет бонусов для = 50", () => {
    expect(calculateBonus(0.5, 49.5)).toEqual(50);
  });
});
