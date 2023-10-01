export const metrics = [
    {
        name: "Cost Per Miles",
        labelArr: ["Impression", "CPM"],
        computeArr: [
            (b: number, c: number) => b / (c / 1000),
            (a: number, b: number) => b / (a / 1000),
        ],
        use_cost: true,
        category: ["digital"],
    },
    {
        name: "Cost Per Click",
        labelArr: ["Clicks", "CPC"],
        computeArr: [
            (b: number, c: number) => b / c,
            (a: number, b: number) => b / a,
        ],

        use_cost: true,
        category: ["digital"],
    },
    {
        name: "Cost Per Lead",
        labelArr: ["Conversions", "CPL"],
        computeArr: [
            (b: number, c: number) => b / c,
            (a: number, b: number) => b / a,
        ],

        use_cost: true,
        category: ["digital"],
    },
    {
        name: "Reach and Frequency",
        labelArr: ["Impressions", "Reach", "Frequency"],
        computeArr: [
            (b: number, c: number) => b * c,
            (a: number, c: number) => a / c,
            (a: number, b: number) => a / b,
        ],

        use_cost: false,
        category: ["digital"],
    },
    {
        name: "Click-Through Rate",
        labelArr: ["Clicks", "Impressions", "CTR (%)"],
        computeArr: [
            (b: number, c: number) => (c * b) / 100,
            (a: number, c: number) => a / (c / 100),
            (a: number, b: number) => (a / b) * 100,
        ],

        use_cost: false,
        category: ["digital"],
    },
    {
        name: "Conversion Rate",
        labelArr: ["Conversions", "Clicks", "CVR (%)"],
        computeArr: [
            (b: number, c: number) => (c * b) / 100,
            (a: number, c: number) => a / (c / 100),
            (a: number, b: number) => (a / b) * 100,
        ],

        use_cost: false,
        category: ["digital"],
    },
    {
        name: "Return on Ad Spend",
        labelArr: ["Revenue", "ROAS"],
        computeArr: [
            (b: number, c: number) => b / c,
            (a: number, b: number) => a / b,
        ],
        use_cost: true,
        category: ["digital"],
    },
    {
        name: "Gross Rating Points",
        labelArr: ["Reach (%)", "Frequency", "GRPs"],
        computeArr: [
            (b: number, c: number) => b * c,
            (a: number, c: number) => a / c,
            (a: number, b: number) => a * b,
        ],
        use_cost: false,
        category: ["tv"],
    },
    {
        name: "Ad Awareness (%)",
        labelArr: ["Total Respondents", "Aware Respondents", "Awareness (%)"],
        computeArr: [
            (b: number, c: number) => (c * b) / 100,
            (a: number, c: number) => a / (c / 100),
            (a: number, b: number) => (a / b) * 100,
        ],
        use_cost: false,
        category: ["tv"],
    },
    {
        name: "Reach Rate",
        labelArr: ["Total Audience", "Reached Audience", "Reach Rate (%)"],
        computeArr: [
            (b: number, c: number) => (c * b) / 100,
            (a: number, c: number) => a / (c / 100),
            (a: number, b: number) => (a / b) * 100,
        ],
        use_cost: false,
        category: ["tv"],
    },
    {
        name: "Return on Investment",
        labelArr: ["Revenue", "ROI (%)"],
        computeArr: [
            (b: number, c: number) => (c / 100) * b + b,
            (a: number, b: number) => ((a - b) / b) * 100,
        ],
        use_cost: true, // Assumption made based on your earlier structure
        category: ["digital", "tv"],
    },
    {
        name: "Opportunities to See",
        labelArr: ["Ad Display Frequency", "Days Displayed", "OTS"],
        computeArr: [
            (b: number, c: number) => b * c,
            (a: number, c: number) => a / c,
            (a: number, b: number) => a * b,
        ],
        use_cost: false,
        category: ["ooh"],
    },
    {
        name: "Daily Effective Circulation",
        labelArr: ["Pedestrians", "Vehicles", "DEC"],
        computeArr: [
            (b: number, c: number) => b + c,
            (a: number, c: number) => a + c,
            (a: number, b: number) => a + b,
        ],
        use_cost: false,
        category: ["ooh"],
    },
    {
        name: "Visibility Adjusted Contact",
        labelArr: ["Total Visible Time", "Total Time", "VAC (%)"],
        computeArr: [
            (b: number, c: number) => (c * b) / 100,
            (a: number, c: number) => a / (c / 100),
            (a: number, b: number) => (a / b) * 100,
        ],
        use_cost: false,
        category: ["ooh"],
    },
    {
        name: "Location Efficiency Index",
        labelArr: [
            "Target Audience at Location",
            "Total Audience at Location",
            "LEI",
        ],
        computeArr: [
            (b: number, c: number) => (c * b) / 100,
            (a: number, c: number) => a / (c / 100),
            (a: number, b: number) => (a / b) * 100,
        ],
        use_cost: false,
        category: ["ooh"],
    },
    {
        name: "Percentage Active Viewing Time",
        labelArr: ["Active View Time", "Total Ad Time", "PAVT (%)"],
        computeArr: [
            (b: number, c: number) => (c * b) / 100,
            (a: number, c: number) => a / (c / 100),
            (a: number, b: number) => (a / b) * 100,
        ],
        use_cost: false,
        category: ["ooh"],
    },
];
