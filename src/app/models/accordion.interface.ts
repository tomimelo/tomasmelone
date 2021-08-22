export interface IAccordion {
    title: string,
    active: boolean,
    children: IAccordionChildren[]
}

interface IAccordionChildren {
    icon: string,
    text: string,
    url?: string,
    external?: boolean
}