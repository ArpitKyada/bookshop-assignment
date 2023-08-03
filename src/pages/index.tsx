import Footer from '@/components/footer';
import Books from '@/features/homePage/books';
import Header from '@/features/homePage/header';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto relative pb-4">
        <Books />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
