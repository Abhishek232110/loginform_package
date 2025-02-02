export default function SumOfTwoNum({
  add1,
  add2,
}: {
  add1: number;
  add2: number;
}) {
  const num1 = add1;
  const num2 = add2;
  const sum = num1 + num2;

  return <div>Sum of two number is {sum}</div>;
}
