import Image from "next/image"
import Link from "next/link"
import { FiThumbsUp } from "react-icons/fi"

const Card = ({result} : {result: any}) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
        <Link href={`/movie/${result.id}?type=${result.media_type || 'movie'}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
        alt={result.title || result.name} width={500} height={300}
        className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300" />
        <div className="p-2">
            <p className="line-clamp-2 text-md">{result.overview}</p>
            <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
            <p className="text-sm text-muted-foreground">
              {result.release_date || result.first_air_date}
              <FiThumbsUp className="h-5 mr-1 ml-0.5"/>
              {result.vote_count}
            </p>
        </div>
        </Link>
    </div>
  )
}

export default Card