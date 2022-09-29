import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

const distanceToNow = (dateTime: Date): string => formatDistanceToNowStrict(dateTime, { addSuffix: true })

export default distanceToNow
