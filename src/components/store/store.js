import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
  likedAttractions: [],
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
  isAttractionLiked: false,
  setIsAttractionLiked: (id) =>
    set(
      (state) => ({
        isAttractionLiked: state.likedAttractions.some(
          (attraction) => attraction.attractionId === id,
        ),
      }),
      false,
      'setAttractionLiked',
    ),
})

// export const useStore = create(devtools(store), { name: 'store' })
export const useStore = create(persist(devtools(store), { name: 'store' }))
