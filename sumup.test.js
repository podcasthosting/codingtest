const sumup = require('./sumup');

test('add sums', () => {
    let data = {
        2024: {
            1: 10,
            2: 25,
            3: 5,
            4: 30
        },
        2025: {
            1: 20,
            2: 15,
            3: 15,
            4: 40
        }
    }
    expect(sumup(data)).toBe({
        2024: {
            sum: 70,
            1: 10,
            2: 25,
            3: 5,
            4: 30
        },
        2025: {
            sum: 90,
            1: 20,
            2: 15,
            3: 15,
            4: 40
        }
    });
});