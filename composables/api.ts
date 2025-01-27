export function getCompanies() {
    return useFetch<{ id: number; name: string; color: string }[]>(`https://sheetdb.io/api/v1/m9efqsgtdsrne`);
}

export function getSingleCompany(companyName: string) {
    return useFetch<{ id: number; name: string; color: string }[]>(`https://sheetdb.io/api/v1/m9efqsgtdsrne?sheet=${companyName}`);
}

