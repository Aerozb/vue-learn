import hyRequest from '../request'

export function getCityAll() {
  return hyRequest.get({
    url: "/city/all"
  })
}

export function getHomeCategories() {
  return hyRequest.get({
    url: "/home/categories"
  })
}