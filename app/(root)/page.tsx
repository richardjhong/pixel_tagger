import SearchForm from "@/components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <section className="teal_container">
      <h1 className="heading">
        Metadata Magic
        <br />
        Made Easy
      </h1>
      <p className="sub-heading !max-w-3xl">
        Get AI-Powered Image Insightful Tags, Embed Custom Metadata, Download
        Smart Images.
      </p>
      <SearchForm query={query} />
    </section>
  );
};

export default Home;
