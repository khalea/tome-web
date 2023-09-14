import Link from 'next/link';

export default function Navbar() {
  const styles = {
    title: 'font-bold text-2xl',
    link: 'text-zinc-900 hover:text-zinc-700',
  };

  return (
    <section>
      <nav className="flex items-center justify-between pb-2 border-b">
        <div className={styles.title}>Tome</div>
        <div className="space-x-4">
          <Link className={styles.link} href="#">
            Home
          </Link>
        </div>
      </nav>
    </section>
  );
}
