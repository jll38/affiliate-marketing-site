import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time className="text-gray-700 text-base" dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}