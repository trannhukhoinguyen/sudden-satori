export interface Master {
    name_vi?: string;
    name_en?: string;
    name_zh?: string;
    name_jp?: string;
    sect: string[];
    disciples?: string[];
}


export interface TreeNode {
    id: string;
    name: string;
    children: TreeNode[];
}

export interface KoanTitle {
    id?: number;
    title: string;
    slug: string;
}

export interface Koan {
    id?: number;
    title: string;
    main: string;
}

export interface PostTitleWithSlug {
    title: string;
    slug: string;
}
