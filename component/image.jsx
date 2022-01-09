export default function Img(props) {
  const cloudflareImageLoader = ({ src, width, quality }) => {
    if (!quality) {
      quality = 75
    }
    return `https://${process.env.NEXT_PUBLIC_WORKERS}?width=${width}&quality=${quality}&image=https://${process.env.NEXT_PUBLIC_DOMAINS}${src}`
  }

  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized={true} {...props} alt={props.alt} />
  } else {
    return <Image {...props} loader={cloudflareImageLoader} alt={props.alt} />
  }
}