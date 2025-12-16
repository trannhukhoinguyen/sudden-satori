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

export interface PostTitleWithSlug {
    title: string;
    slug: string;
}
