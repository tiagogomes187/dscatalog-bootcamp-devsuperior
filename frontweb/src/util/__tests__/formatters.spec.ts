import { formatPrice } from "util/formatters";

test('formatPrice should format number pt_BR when given 10.1', () => {

    const result = formatPrice(10.1);
    expect(result).toEqual("10,10");
});
