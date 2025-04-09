export interface Vacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: number; // This is the company ID from the back-end
}