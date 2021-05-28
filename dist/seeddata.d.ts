export var menulocations: {
    name: string;
}[];
export namespace adminUser {
    const email: string;
    const username: string;
    const admin: boolean;
    const password: string;
    const verifiedAt: Date;
}
export var locations: {
    name: string;
    street: string;
}[];
export var partners: {
    title: string;
    link: string;
    partnerlogo: string;
    order: number;
}[];
export var employees: {
    name: string;
    position: string;
    avatar: string;
    content: string;
}[];
export var pagesgerman: {
    title: string;
    slug: string;
    content: string;
    order: number;
}[];
export var pages: ({
    title: string;
    slug: string;
    content: string;
    order: number;
} | {
    title: string;
    slug: string;
    content: {
        ops: ({
            insert: string;
            attributes?: undefined;
        } | {
            attributes: {
                header: number;
                height?: undefined;
                width?: undefined;
                bold?: undefined;
                list?: undefined;
                color?: undefined;
                link?: undefined;
            };
            insert: string;
        } | {
            attributes: {
                height: string;
                width: string;
                header?: undefined;
                bold?: undefined;
                list?: undefined;
                color?: undefined;
                link?: undefined;
            };
            insert: {
                image: string;
            };
        } | {
            attributes: {
                bold: boolean;
                header?: undefined;
                height?: undefined;
                width?: undefined;
                list?: undefined;
                color?: undefined;
                link?: undefined;
            };
            insert: string;
        } | {
            attributes: {
                list: string;
                header?: undefined;
                height?: undefined;
                width?: undefined;
                bold?: undefined;
                color?: undefined;
                link?: undefined;
            };
            insert: string;
        } | {
            attributes: {
                color: string;
                link: string;
                header?: undefined;
                height?: undefined;
                width?: undefined;
                bold?: undefined;
                list?: undefined;
            };
            insert: string;
        })[];
    };
    order: number;
})[];
export var stories: {
    title: string;
    subtitle: string;
    workPosition: string;
    excerpt: string;
    content: string;
    order: number;
    avatar: string;
    companylogo: string;
}[];
export var courses: {
    headline: string;
    order: number;
    icon: string;
    subheading: string;
    title: string;
    subtitle: string;
    archivements: {
        icon: string;
        description: string;
    }[];
    features: {
        title: string;
        subtitle: string;
        icon: string;
    }[];
    timeline: {
        title: string;
        subtitle: string;
        time: string;
    }[];
}[];
export var contacts: {
    name: string;
    email: string;
    phone: string;
    body: string;
    createdAt: string;
    updatedAt: Date;
}[];
export var languages: {
    title: string;
    createdAt: string;
    updatedAt: Date;
}[];
