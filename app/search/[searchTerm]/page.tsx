import Results from '@/components/result';
import React from 'react'

const SearchPage = async ({ params }: { params: Promise<{ searchTerm: string }> }) => {
    const searchTerm = (await params).searchTerm;

    console.log("SEARCH TERM:", searchTerm);

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);

    console.log("RES STATUS:", res.status);


    const data = await res.json();
        console.log("DATA:", data);

    const results = data.results;
       console.log("RESULTS:", results);

  return (
    <div>
        {
            results && results.length === 0 && (
                <h1 className='text-center pt-6'>
                    No results found for "{searchTerm}"
                </h1>
            )
        }
        {results && <Results results={results} />}
    </div>
  )
}

export default SearchPage