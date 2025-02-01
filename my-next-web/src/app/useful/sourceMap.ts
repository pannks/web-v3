import { JSX } from "react";
import { IconType } from "react-icons";
import {
    HiMiniHome,
    HiOutlineCodeBracketSquare,
    HiOutlineHome
} from "react-icons/hi2";
export type ISourceMap = {
    id: string;
    slug: string | null;
    parent_id: string | null;
    detail: string;
    label: string;
    content?: (ITextContent | ISnippetContent | ILinkContent | IImageContent)[];
    icon?: IconType;
};

export type ITextContent = {
    type: "text";
    content: string | string[];
};

export type ISnippetContent = {
    type: "snippet";
    content: string[][];
};

export type ILinkContent = {
    type: "link";
    content: {
        text: string;
        url: string;
    }[];
};

export type IImageContent = {
    type: "image";
    content: {
        image_url: string;
        alt?: string;
    };
};

export const sourceMaps: ISourceMap[] = [
    {
        parent_id: null,
        id: "main",
        slug: "",
        detail: "",
        label: "Main",
        content: [],
        icon: HiOutlineHome
    },
    {
        parent_id: null,
        id: "apps-script",
        slug: "apps-script",
        detail: `Apps Script is a cloud-based JavaScript platform powered by Google Drive that lets you integrate with and automate tasks across Google products.`,
        label: "Apps Script",
        icon: HiOutlineCodeBracketSquare,
        content: [
            {
                type: "link",
                content: [
                    {
                        text: "Google Sheets",
                        url: "/useful/gs-sheets"
                    },
                    {
                        text: "Google Docs",
                        url: "/useful/gs-docs"
                    }
                ]
            }
        ]
    },
    {
        parent_id: "apps-script",
        id: "google-sheets",
        slug: "gs-sheets",
        detail: "Chapter 3 : Code Snippets for Apps Script integration with Google Sheets (Bounded script)",
        label: "Google Sheets",
        content: [
            {
                type: "snippet",
                content: [
                    [
                        "gs-sheet-qrcode1-1",
                        "gs-sheet-qrcode1-2",
                        "gs-sheet-qrcode1-3",
                        "gs-sheet-qrcode1-4"
                    ]
                ]
            },
            {
                type: "image",
                content: {
                    image_url: "/useful/img-1.png",
                    alt: "placeholder"
                }
            },

            {
                type: "snippet",
                content: [["gs-sheet-basicApi"]]
            }
        ]
    },
    {
        parent_id: "apps-script",
        id: "google-docs",
        slug: "gs-docs",
        detail: "Chapter 4 : Code Snippets for Apps Script integration with Google Docs (Bounded script)",
        label: "Google Docs",
        content: [
            {
                type: "snippet",
                content: [["gs-doc-docToMd"]]
            }
        ]
    },
    {
        parent_id: null,
        id: "react-hooks",
        slug: "react-hooks",
        detail: "Code snippets for Custom Hooks that mostly used in my projects",
        label: "React Hooks",
        icon: HiOutlineCodeBracketSquare,
        content: [
            {
                type: "snippet",
                content: [
                    ["rhk-useLocalStorage"],
                    ["rhk-useEncodeLocalStorage"],
                    ["rhk-useFetch"]
                ]
            }
        ]
    },
    {
        parent_id: null,
        id: "js-objects",
        slug: "js-objects",
        detail: "Code snippets for Manipulating Objects, Arrays, Time, Currency in Javascript",
        label: "Javascripts",
        icon: HiOutlineCodeBracketSquare,
        content: [
            {
                type: "snippet",
                content: [["jso-convertToCurrency"]]
            }
        ]
    }
];

function buildNav(sources: ISourceMap[]): any[] {
    const lookup = new Map<string, any>();

    // Create a map entry for each source
    sources.forEach((s) => {
        lookup.set(s.id, {
            id: s.id,
            slug: s.slug,
            href: s.href,
            children: [],
            detail: s.detail,
            label: s.label,
            icon: s.icon
        });
    });

    // Assign children to parents
    sources.forEach((s) => {
        if (s.parent_id) {
            const parent = lookup.get(s.parent_id);
            parent.children.push(lookup.get(s.id));
        }
    });

    // Filter out root nodes and set children to null if empty
    const results = [...lookup.values()].filter(
        (item) => !sources.find((s) => s.id === item.id)?.parent_id
    );

    function finalizeChildren(arr: any[]) {
        arr.forEach((item) => {
            if (item.children.length === 0) {
                item.children = null;
            } else {
                finalizeChildren(item.children);
            }
        });
    }
    finalizeChildren(results);

    return results;
}

export const navSources = buildNav(sourceMaps);
//output:
// [
//     {
//         id: "main",
//         slug: null,
//         children: null
//         },
//     {
//         id: "apps-script",
//         slug: "apps-script",
//         children: [
//             {
//                 id: "snippets",
//                 slug: "apps-script-snippets",
//                 children: null
//             }
//         ]
//     }
//
