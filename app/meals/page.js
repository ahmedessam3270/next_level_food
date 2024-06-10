import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        and if you want to share some thoughts you can do it here
        <Link href="/meals/share">share</Link>
      </p>
    </main>
  );
}
