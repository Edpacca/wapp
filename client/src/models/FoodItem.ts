export interface foodItem {
    course: 'entree' | 'starter' | 'main' | 'dessert'
    name: string[],
    description: string[],
    isVegan: boolean,
    value: number,
}
