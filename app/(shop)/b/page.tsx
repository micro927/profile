import Link from "next/link";

function B() {
  return (
    <>
      <p>B in Shop</p>
      <Link href={"/show/product"}>Click to show show</Link>
    </>
  );
}

export default B;
