import ImageCard from "@/components/ImageCard";
import SearchForm from "@/components/SearchForm";
import { fetchImages } from "@/lib/utils";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const images = await fetchImages();

  return (
    <>
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Images"}
        </p>
        <ul className="mt-7 card_grid">
          {images?.length > 0 ? (
            images.map((image: any, index: number) => (
              <ImageCard
                key={image?._id}
                image={image}
              />
            ))
          ) : (
            <p className="no-results">No images found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
