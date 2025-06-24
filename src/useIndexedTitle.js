import { ref } from 'vue';

const currentIndex = ref(0)

export const useIndexedTitle = () => {

    const set = (newIndex) => {
        currentIndex.value = newIndex
    }

    return {
        set,
        currentIndex
    }
}