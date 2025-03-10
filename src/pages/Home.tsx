import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

function Home() {
  return (
    <section className="text-center p-10">
      <h1 className="text-4xl font-bold">Welcome to Phi</h1>
      <p className="text-lg mt-2">A place for my blogs, portfolio, and resume.</p>
      <Button className="mt-4">Explore</Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Blog</h2>
            <p>Read my latest thoughts and insights.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Portfolio</h2>
            <p>Explore my past work and projects.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Home;

