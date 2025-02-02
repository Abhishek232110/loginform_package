function LoginForm({ name }: { name: string }) {
  return <div>My name is {name}</div>;
}
function SubstractofTwoNum({ sub1, sub2 }: { sub1: number; sub2: number }) {
  const num1 = sub1;
  const num2 = sub2;
  const sub = num1 - num2;

  return <div>Substract of two number is {sub}</div>;
}

export { SubstractofTwoNum, LoginForm };
