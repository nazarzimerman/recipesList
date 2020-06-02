 export const SEARCH_CHANGE = 'SEARCH_CHANGE';

 export function searchChange(search) {
    return {
        type: SEARCH_CHANGE,
        search: search,
    }
}