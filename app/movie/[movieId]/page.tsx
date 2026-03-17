import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const MoviePage = async ({ params, searchParams }: { params: Promise<{ movieId: string }>, searchParams: Promise<{ type: string }> }) => {
    const { movieId } = await params;
    const { type } = await searchParams;
        const mediaType = type || "movie";

        if (!API_KEY) {
            throw new Error("Missing NEXT_PUBLIC_API_KEY");
        }

        let res = await fetch(`https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${API_KEY}`);
    let movie = await res.json();
     if (movie.success === false) {
                res = await fetch(`https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}`);
        movie = await res.json();
    }


    const imagePath = movie.backdrop_path || movie.poster_path;
    
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
            {imagePath && <Image src={`https://image.tmdb.org/t/p/original/${imagePath}`} width={500} height={300} alt={movie.title || movie.name} className="rounded-lg" style={{maxWidth: '100%', height:'100%'}} />}
            <div className="p-2">
                <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
                <p className="text-lg mb-3">{movie.overview}</p>
                <p className="mb-3">
                    <span className="font-semibold">Release Date:</span>
                    {movie.release_date || movie.first_air_date}</p>
                <p className="mb-3">
                    <span className="font-semibold mr-1">Rating:</span>
                    {movie.vote_count}</p>
            </div>
        </div>
      
    </div>
  )
}

export default MoviePage