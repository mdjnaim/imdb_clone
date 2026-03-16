import Results from '@/components/result'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export default async function Home({searchParams}: {searchParams: Promise<{genre?: string}>}) {
  const { genre: genreParam } = await searchParams
  const genre = genreParam || 'fetchTrending'

  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const results = data.results

  return (
    <div>
      <Results results={results} />
    </div>
  )
}