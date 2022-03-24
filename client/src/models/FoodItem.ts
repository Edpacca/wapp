export interface foodItem {
    course: 'starter' | 'main' | 'dessert'
    name: string[],
    description: string[],
    isVegan: boolean,
    value: number,
}
