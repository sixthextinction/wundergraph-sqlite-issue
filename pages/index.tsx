import { NextPage } from "next";
import { useQuery, withWunderGraph } from "../components/generated/nextjs";

const Home: NextPage = () => {
  const result = useQuery.GetUsers({ input: { limit: 10 } });
  // const result = useQuery.TracksByGenre({ input: { GenreId: 1 } });

  return (
    <div>
      {result ? (
        <div
          style={{ 
			padding: "20px", 
			backgroundColor: "white", 
			color: "black" 
		}}
        >
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : (
        <span> Loading... </span>
      )}
    </div>
  );
};

export default withWunderGraph(Home);
