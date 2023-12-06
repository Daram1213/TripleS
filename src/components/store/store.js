import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
  likedAttractions: [],
  // 로그인시 유저 정보 조회 후 setLikedAttraction(data.favoriteAttractions)
  setLikedAttraction: (fetchedAttractions) =>
    set(
      () => ({
        likedAttractions: [...fetchedAttractions],
      }),
      false,
      'setLikedAttraction',
    ),
  addLikedAttraction: (attraction) =>
    set(
      (state) => {
        const attractionExists = state.likedAttractions.some(
          (item) => item.attractionId === attraction.attractionId,
        )
        if (!attractionExists) {
          return {
            likedAttractions: [...state.likedAttractions, attraction],
          }
        }
        return state
      },
      false,
      'addLikedAttraction',
    ),
  deleteLikedAttraction: (id) =>
    set(
      (state) => ({
        likedAttractions: state.likedAttractions.filter(
          (attraction) => attraction.attractionId !== id,
        ),
      }),
      false,
      'deleteLikedAttraction',
    ),
})

export const useStore = create(persist(devtools(store), { name: 'store' }))
