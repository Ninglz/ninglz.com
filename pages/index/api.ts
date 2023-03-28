export interface PostMeta {
  id: string
  title: object
  link: string
  date_gmt: string
}

export function getLatestPosts(): Promise<PostMeta[]> {
  const apiUrl = `https://1aha.com/wp-json/wp/v2/posts?per_page=3&_fields=id,title,link,date_gmt`
  return fetch(apiUrl)
    .then(async res => {
      const result = await res.json()
      console.log(result)
      return result
    })
}