import { writable, derived, get } from 'svelte/store'; // Tambahkan 'get'

export function createPagination(initialData: any[], itemsPerPage: number = 5) {
    const data = writable(initialData);
    const currentPage = writable(1);

    const totalPages = derived(data, ($data) => {
        return Math.ceil($data.length / itemsPerPage) || 1;
    });

    const paginatedItems = derived([data, currentPage], ([$data, $currentPage]) => {
        const start = ($currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return $data.slice(start, end);
    });

    return {
        data,
        currentPage,
        totalPages,
        paginatedItems,
        next: () => currentPage.update(n => {
            const total = get(totalPages); 
            return n < total ? n + 1 : n;
        }),
        prev: () => currentPage.update(n => n > 1 ? n - 1 : n),
        goToPage: (page: number) => currentPage.set(page),
        updateData: (newData: any[]) => {
            data.set(newData);
            currentPage.set(1);
        }
    };
}